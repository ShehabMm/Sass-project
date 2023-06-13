import "./Edit.css";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";
const Edit = () => {
  return (
    <>
      <div className="edit-page">
        <input type="text" value={"Write here"}></input>
        <EditIcon sx={{ fontSize: "15px", cursor: "pointer" }} />
      </div>

      <section className="main-component">
        <div className="inside">
          <p>Create an hour ago</p>
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Completed</label>
          </div>
        </div>
        <div>
          <ul>
            <li className="card">
              <div className="in">
                <p>subtask</p>
                <DeleteIcon className="bin" />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="card">
              <div className="in">
                <p>subtask</p>
                <DeleteIcon   color='info' className="bin" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="final">
        <button>Add more+</button>
        <button> Delete task</button>
      </section>
    </>
  );
};

export default Edit;
