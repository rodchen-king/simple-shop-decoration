/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-14 14:14:46
 * @LastEditTime: 2021-07-14 19:21:11
 * @LastEditors: rodchen
 */
class NodeRegistry {
  public nodeTypes: Record<string, (config: any) => {}> = Object.create(null);
  public nodePropertyTypes: Record<string, (config: any) => {}> =
    Object.create(null);

  public registerNode = (name: string, callback: any) => {
    this.nodeTypes[name] = callback;
  };

  public renderNode = (name: string, config: any) => {
    return this.nodeTypes[name](config);
  };

  public registerNodeProperty = (name: string, callback: any) => {
    this.nodePropertyTypes[name] = callback;
  };

  public renderNodeProperty = (name: string, config?: any) => {
    const callback = this.nodePropertyTypes[name];
    return callback ? callback(config) : '';
  };
}

const ShopDecoration = new NodeRegistry();

export default ShopDecoration;
