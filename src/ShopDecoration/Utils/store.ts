/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 19:53:09
 * @LastEditors: rodchen
 */
import { NodeClass } from '../Type/interface';
import { NodeClassType } from '../Type/type';

class Store {
  public storeData: NodeClassType[] = [];
  public currentNode: NodeClassType = new NodeClass('');
  public subscriptionNodeArray: any[] = [];
  public subscriptionStoreDataArray: any[] = [];

  public setCurrentNode(node: NodeClassType) {
    this.currentNode = node;
    this.subscriptionNodeArray.forEach((item) => {
      item(node);
    });
  }

  public updateStoreData(storeData: NodeClassType[]) {
    this.storeData = storeData;
    this.subscriptionStoreDataArray.forEach((item) => {
      item(storeData);
    });
  }

  public updateNodeContent({ key, content }: { key: string; content: Object }) {
    this.storeData = this.storeData.map((item) =>
      item.key === key
        ? ((item.content = JSON.stringify(content)), item)
        : item,
    );
    this.subscriptionStoreDataArray.forEach((item) => {
      item(this.storeData);
    });
  }

  public subscriptionNodeChange(callback: Function) {
    this.subscriptionNodeArray.push(callback);
  }

  public subscriptionStoreDataChange(callback: Function) {
    this.subscriptionStoreDataArray.push(callback);
  }
}

const store = new Store();

export default store;
