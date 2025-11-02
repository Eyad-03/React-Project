import React, { useReducer } from "react";
import "../css/todo.css";

/* الحالة الأولية */
const initialState = {
  showModal: false,
  tasks: [],
  form: { title: "", details: "" },
};

/* المقلِّص (Reducer) */
function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false, form: { title: "", details: "" } };
    case "UPDATE_FIELD":
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };
    case "ADD_TASK": {
      const newTask = {
        id: crypto.randomUUID(),
        title: state.form.title.trim() || "Untitled",
        details: state.form.details.trim(),

      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
        showModal: false,
        form: { title: "", details: "" },
      };
    }
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    default:
      return state;
  }
}

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.form.title.trim() && !state.form.details.trim()) return;
    dispatch({ type: "ADD_TASK" });
  };

  return (
    <div style={{ direction: "rtl" }}>
      {/* زر الإضافة */}
      <div className="container-task">
        <button
          className="plus"
          aria-label="إضافة مهمة"
          onClick={() => dispatch({ type: "OPEN_MODAL" })}
        >
          <span>+</span>
        </button>
      </div>

      {/* شبكة البطاقات */}
      <div className="task-grid">
        {state.tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-card-header">
              <h4 className="task-title">{task.title}</h4>
              <button
                className="task-delete"
                onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}
                title="حذف"
              >
                ×
              </button>
            </div>
            {task.details && <p className="task-details">{task.details}</p>}
          </div>
        ))}
        {state.tasks.length === 0 && (
          <p className="task-empty">لا توجد مهام بعد — اضغط على علامة + للإضافة</p>
        )}
      </div>

      {/* المودال */}
      {state.showModal && (
        <div className="modal-overlay" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>إضافة مهمة جديدة</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="عنوان المهمة"
                value={state.form.title}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "title",
                    value: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="التفاصيل (اختياري)"
                value={state.form.details}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "details",
                    value: e.target.value,
                  })
                }
              />
              <div className="modal-buttons">
                <button type="submit">حفظ</button>
                <button type="button" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
