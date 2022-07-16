import { MTodo } from "../../Model/MTodo";
import { RTodo } from "../../Repository/RTodo";

interface GetTodoList {
  getList: () => Promise<MTodo.root[]>;
  getDetail: (id: string) => Promise<MTodo.root | null>;
}

export class UGetTodoList implements GetTodoList {
  todoRepo: RTodo
  constructor(_todoRepo: RTodo) {
    this.todoRepo = _todoRepo;
  }

  getList = async () => this.todoRepo.getTodoList();

  getDetail = async (id: string) => this.todoRepo.getTodoDetail(id);
}