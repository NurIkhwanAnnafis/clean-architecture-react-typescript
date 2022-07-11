import React from 'react';
import { MTodo } from '../../../Domain/Model/MTodo';

interface Props {
  listData: MTodo.root[]
}

const TodoList: React.FC<Props> = (props) => {
  const { listData = [] } = props;

  return (
    <ul>
      Todo List:
      {listData.map(data => <li key={data.id}>{data.title}</li>)}
    </ul>
  )
}

export default TodoList;