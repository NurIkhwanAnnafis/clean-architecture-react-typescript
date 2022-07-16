import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiTodo from "../../../Data/DataSource/Api/ApiTodo";
import { RTodoImp } from "../../../Data/Repository/RTodoImp";
import { MTodo } from "../../../Domain/Model/MTodo"
import { UGetTodoList } from '../../../Domain/Usecase/Todo/GetTodoList';


const TodoViewDetailModel = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<MTodo.root | null>(null);
  
  const usecase = new UGetTodoList(
    new RTodoImp(new ApiTodo())
  )

  const getTodoDetail = async (id: string) => {
    const tempDetailData = await usecase.getDetail(id);
    setDetailData(tempDetailData);
  }

  useEffect(() => {
    if (id) getTodoDetail(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    detailData,
  }
}

export default TodoViewDetailModel;