import { MTodo } from "../../Model/MTodo";
import { RTodo } from "../../Repository/RTodo";

interface GetTodoList {
  invoke: () => Promise<MTodo.root[]>;
}

export class UGetTodoList implements GetTodoList {
  todoRepo: RTodo
  constructor(_todoRepo: RTodo) {
    this.todoRepo = _todoRepo;
  }

  invoke = async () => {
    return this.todoRepo.getTodoList();
  }
}