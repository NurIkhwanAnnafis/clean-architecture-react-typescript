import { MTodo } from "../../Domain/Model/MTodo";
import { RTodo } from "../../Domain/Repository/RTodo";
import DSTodo from "../DataSource/DSTodo";

export class RTodoImp implements RTodo {
  dataSource: DSTodo;

  constructor(_datasource: DSTodo) {
    this.dataSource = _datasource;
  }

  async getTodoList(): Promise<MTodo.root[]> {
    return this.dataSource.getTodoList();
  }

  async getTodoDetail(id: string): Promise<MTodo.root | null> {
    return this.dataSource.getTodoDetail(id);
  }
}