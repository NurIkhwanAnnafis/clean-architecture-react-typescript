import { MTodo } from "../Model/MTodo";

export interface RTodo {
  getTodoList(): Promise<MTodo.root[]>;
  getTodoDetail(id: string): Promise<MTodo.root | null>;
}