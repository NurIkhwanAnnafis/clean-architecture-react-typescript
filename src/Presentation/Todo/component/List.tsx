import React from 'react';
import { MTodo } from '../../../Domain/Model/MTodo';

interface Props {
  listData: MTodo.root[];
  handleClick: (id: string) => void
}

const TodoList: React.FC<Props> = (props) => {
  const { listData = [], handleClick } = props;

  return (
    <ul>
      Todo List:
      {listData.map(data => <li onClick={() => handleClick(String(data.id))} key={data.id}>{data.title}</li>)}
    </ul>
  )
}

export default TodoList;