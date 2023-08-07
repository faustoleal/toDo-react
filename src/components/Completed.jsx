import ItemCompleted from "./ItemCompleted";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Completed = ({ completed, deleteAll, deleteItem }) => {
  return (
    <>
      {completed.length > 0 ? (
        completed.map((el) => (
          <ItemCompleted key={el.id} data={el} deleteItem={deleteItem} />
        ))
      ) : (
        <div></div>
      )}
      <button className="delete" onClick={deleteAll}>
        <DeleteOutlineIcon className="trash" />
        Delete
      </button>
    </>
  );
};

export default Completed;
