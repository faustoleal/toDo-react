import Form from "./Form";
import Item from "./Item";

const Active = ({ createItemForm, handleItemCheck, active }) => {
  return (
    <>
      <Form createItemForm={createItemForm} />
      {active.length > 0 ? (
        active.map((el) => (
          <Item key={el.id} data={el} handleItemCheck={handleItemCheck} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Active;
