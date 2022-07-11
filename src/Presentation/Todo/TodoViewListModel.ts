import { useEffect, useState } from "react"
import ApiTodo from "../../Data/DataSource/Api/ApiTodo";
import { RTodoImp } from "../../Data/Repository/RTodoImp";
import { MTodo } from "../../Domain/Model/MTodo"
import { UGetTodoList } from '../../Domain/Usecase/Todo/GetTodoList';

const usecase = new UGetTodoList(
  new RTodoImp(new ApiTodo())
)

const TodoViewListModel = () => {
  const [listData, setListData] = useState<MTodo.root[]>([]);

  const getTodoList = async () => {
    const tempListData = await usecase.invoke();
    setListData(tempListData);
  }

  useEffect(() => {
    getTodoList();
  }, []);

  return {
    listData,
  }
}

export default TodoViewListModel;