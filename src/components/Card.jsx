import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ActionTypes from "../redux/actionTypes";
import { remove, toggle } from "../redux/action";
import api from "../api";

function Card({ todo }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => {
        dispatch(remove(todo.id));
      })
      .catch(() => alert("üzgünüz bir hata oluştu."));
    // dispatch({ type: ActionTypes.DELETE, payload: todo.id });
  };
  const handleState = () => {
    api
      .patch(`/todos/${todo.id}`, { isDone: !todo.isDone })
      .then(() => {
        dispatch(toggle(todo));
      })
      .catch(() => alert("üzgünüz bir hata oluştu."));
    // dispatch({ type: ActionTypes.TOGGLE, payload: todo });
  };
  return (
    <div className="border rounded my-5 p-4 shadow-lg">
      <h5>{todo.text}</h5>
      <h6>{new Date(todo.createdAt).toLocaleDateString()}</h6>
      <h6>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={handleState} className="btn btn-success mx-3">
        {todo.isDone ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
}

export default Card;
