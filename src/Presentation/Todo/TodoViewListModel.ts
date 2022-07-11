import { useEffect, useState } from "react"
import ApiTodo from "../../Data/DataSource/Api/ApiTodo";
import { RTodoImp } from "../../Data/Repository/RTodoImp";
import { MTodo } from "../../Domain/Model/MTodo"
import { UGetTodoList } from '../../Domain/Usecase/Todo/GetTodoList';


const TodoViewListModel = () => {
  const [listData, setListData] = useState<MTodo.root[]>([]);
  
  const usecase = new UGetTodoList(
    new RTodoImp(new ApiTodo())
  )

  const getTodoList = async () => {
    const tempListData = await usecase.invoke();
    setListData(tempListData);
  }

  useEffect(() => {
    getTodoList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    listData,
  }
}

export default TodoViewListModel;