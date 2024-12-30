import React from "react";
import { useDispatch } from "react-redux";
// import ActionTypes from "../redux/actionTypes";
import { update } from "../redux/action";
import api from "../api";

function Modal({ todo, close }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = e.target[1].value;
    const updatedTodo = { ...todo, text: newText };
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => {
        dispatch(update(updatedTodo));
      })
      .catch(() => alert("üzgünüz işlem başarısız"));
    // dispatch({ type: ActionTypes.UPDATE, payload: updatedTodo });

    close();
  };
  return (
    <div className="modal d-block bg-blur">
      <div className="modal-dialog modal-dialog-centered text-black">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <label>Yeni Todo</label>
              <input
                type="text"
                className="form-control shadow mt-2"
                defaultValue={todo.text}
                autoFocus
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
