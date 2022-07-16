import TodoList from './component/List';
import './TodoViewList.css';
import TodoViewListModel from './model/TodoViewListModel';

const Todo = () => {
  const { listData, handleClick } = TodoViewListModel();

  return (
    <div className="App">
      <TodoList listData={listData} handleClick={handleClick} />
    </div>
  );
}

export default Todo;