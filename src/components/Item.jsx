import { useState } from "react";

const Item = ({ data, handleItemCheck }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((state) => !state);
    handleItemCheck(checked, data);
  };

  return (
    <div className="item">
      <input type="checkbox" onChange={handleCheck} checked={data.check} />
      <p className={`text ${data.check === true ? "checked" : "no-checked"}`}>
        {data.item}
      </p>
    </div>
  );
};

export default Item;
