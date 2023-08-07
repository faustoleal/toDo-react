import Form from "./Form";
import Item from "./Item";

const All = ({ createItemForm, handleItemCheck, item }) => {
  return (
    <>
      <Form createItemForm={createItemForm} />
      {item.length > 0 ? (
        item.map((el) => (
          <Item key={el.id} data={el} handleItemCheck={handleItemCheck} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default All;
