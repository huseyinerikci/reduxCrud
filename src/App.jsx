import React, { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import api from "./api/index";
import { useDispatch } from "react-redux";
import { setTodo } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("/todos").then((res) => dispatch(setTodo(res.data)));
  }, []);
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          <span className="text-warning">REDUX</span> CRUD
        </h2>
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
