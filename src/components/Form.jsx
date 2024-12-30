import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
// import ActionTypes from "../redux/actionTypes";
import { create } from "../redux/action";
import api from "../api";

function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();
    if (!text) return alert("Input boş girilemez..!");
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };
    api
      .post("/todos", newTodo)
      .then(() => dispatch(create(newTodo)))
      .catch(() => alert("üzgünüz işlem başarısız oldu."));
    // dispatch({ type: ActionTypes.CREATE, payload: newTodo });

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Örn: Redux Öğren"
      />
      <button type="submit" className="btn btn-warning">
        Gönder
      </button>
    </form>
  );
}

export default Form;
