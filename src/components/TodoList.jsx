import { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import All from "./All";
import Active from "./Active";
import Completed from "./Completed";

const TodoList = () => {
  const [item, setItem] = useState([]);

  const createItemForm = (data) => {
    data.id = Date.now();
    setItem([...item, data]);
  };

  const handleItemCheck = (checked, data) => {
    data.check = !checked;
    setItem([...item]);
  };

  const deleteItem = (data) => {
    data.check = false;
    setItem([...item]);
  };

  const deleteAll = () => {
    item.forEach((el) => (el.check = false));
    setItem([...item]);
  };

  const completed = item.filter((el) => el.check === true);
  const active = item.filter((el) => el.check !== true);

  return (
    <main>
      <h1 className="title">#todo</h1>
      <BrowserRouter>
        <nav className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/"
          >
            All
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/active"
          >
            Active
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/completed"
          >
            Completed
          </NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <All
                createItemForm={createItemForm}
                handleItemCheck={handleItemCheck}
                item={item}
              />
            }
          />
          <Route
            path="/active"
            element={
              <Active
                createItemForm={createItemForm}
                handleItemCheck={handleItemCheck}
                active={active}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Completed
                completed={completed}
                deleteAll={deleteAll}
                deleteItem={deleteItem}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default TodoList;
