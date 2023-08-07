import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ItemCompleted = ({ data, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(data);
  };

  return (
    <div className="item">
      <input type="checkbox" defaultChecked="checked" className="checked" />
      <div className="delete-box">
        <p className="text checked">{data.item}</p>
        <button className="delete-btn" onClick={handleDelete}>
          <DeleteOutlineIcon style={{ color: "A7A5A5" }} />
        </button>
      </div>
    </div>
  );
};

export default ItemCompleted;
