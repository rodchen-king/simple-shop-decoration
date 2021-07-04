import { v4 as uuidv4 } from 'uuid';

export class NodeClass {
  key: string = '';
  type: string = '';
  floorLevel: number = 0;
  content: string = '';

  constructor(type: string) {
    this.type = type;
    this.key = uuidv4();
  }
}
