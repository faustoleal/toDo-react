import { useState } from "react";

const initialForm = {
  item: "",
  id: null,
  check: null,
};

const Form = ({ createItemForm }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      check: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.item !== "") {
      createItemForm(form);
    }
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form"
        type="text"
        name="item"
        placeholder="add details"
        onChange={handleChange}
        value={form.item}
      />
      <button type="submit" className="btn">
        <b>Add</b>
      </button>
    </form>
  );
};

export default Form;
