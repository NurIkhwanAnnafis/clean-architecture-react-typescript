import TodoList from './component/List';
import './TodoViewList.css';
import TodoViewListModel from './TodoViewListModel';

const Todo = () => {
  const { listData } = TodoViewListModel();

  return (
    <div className="App">
      <TodoList listData={listData} />
    </div>
  );
}

export default Todo;