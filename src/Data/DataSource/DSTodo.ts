import { MTodo } from '../../Domain/Model/MTodo';

export default interface DSTodo {
  getTodoList(): Promise<MTodo.root[]>
}