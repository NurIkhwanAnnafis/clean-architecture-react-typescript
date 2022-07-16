import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ApiTodo from "../../../Data/DataSource/Api/ApiTodo";
import { RTodoImp } from "../../../Data/Repository/RTodoImp";
import { MTodo } from "../../../Domain/Model/MTodo"
import { UGetTodoList } from '../../../Domain/Usecase/Todo/GetTodoList';

const TodoViewListModel = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<MTodo.root[]>([]);
  
  const usecase = new UGetTodoList(
    new RTodoImp(new ApiTodo())
  )

  const getTodoList = async () => {
    const tempListData = await usecase.getList();
    setListData(tempListData);
  }

  useEffect(() => {
    getTodoList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (pathname: string) => navigate(pathname);

  return {
    listData,
    handleClick,
  }
}

export default TodoViewListModel;