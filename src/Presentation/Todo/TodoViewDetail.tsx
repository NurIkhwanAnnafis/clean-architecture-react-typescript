import './TodoViewDetail.css';
import TodoViewDetailModel from './model/TodoViewDetailModel';
import { Fragment } from 'react';

const Todo = () => {
  const { detailData } = TodoViewDetailModel();

  return (
    <div className="app">
      <h5>Detail:</h5>
      {detailData && (
        <Fragment>
          <p>Title: {detailData.title}</p>
          <p>Completed: {detailData.completed ? 'Yes' : 'No'}</p>
        </Fragment>
      )}
    </div>
  );
}

export default Todo;