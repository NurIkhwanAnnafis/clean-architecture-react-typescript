import { MTodo } from "../../../Domain/Model/MTodo";
import networkService from "../../../Service/network";
import DSTodo from "../DSTodo";
import { ETodoApi } from "./Entity/ETodo";

export default class ApiTodo implements DSTodo {
  async getTodoList(): Promise<MTodo.root[]> {
    try {
      const data: Promise<ETodoApi.root[]> = networkService.get('todos');

      return data;
    } catch (error) {
      Promise.reject(error);

      return [];
    }
  }
}