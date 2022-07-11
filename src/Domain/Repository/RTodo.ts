import { MTodo } from "../Model/MTodo";

export interface RTodo {
  getTodoList(): Promise<MTodo.root[]>;
}