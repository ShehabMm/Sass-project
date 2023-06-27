import "./Edit.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const Edit = () => {

  const {id}  = useParams();

  console.log( (id))







  useEffect(() => {

    axios.get(`http://localhost:8080/api/${id}`).then(response => {

      console.log("response.data");

      console.log(response.data);

    }).catch((err) => {

      console.log(err)

    });

  }, [id]);



  return (
    <>
      <div className="edit-page">
        <input type="text" defaultValue={"Write here"}></input>
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
                <p>ss</p>
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
                <DeleteIcon color='info' className="bin" />
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
