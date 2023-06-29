import "./Edit.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Edit = () => {

  const { id } = useParams();

  console.log(id);









useEffect(() => {
  


  
    axios.get(`http://localhost:8080/api/${id}`).then((res) => {
    
    console.log(res.data.data);
    setposts(res.data.data);
  




}
)












},[] );

  







  const [posts, setposts] = useState([]);
  console.log(posts);

  return (
    <>
      <div className="edit-page">
        <input type="text" defaultValue={posts.title}></input>
        <EditIcon sx={{ fontSize: "15px", cursor: "pointer" }} />
      </div>

      <section className="main-component">
        <div className="inside">
          <p>Create an hour ago</p>
          <div>
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => {
                console.log(posts);
              }}
            />
            <label htmlFor="checkbox">Completed</label>
          </div>
        </div>

        {/* {posts.details.map((item) => {
          console.log(posts)
          return (
            <div key={Math.random}>
              <ul >
                <li className="card">
                  <div className="in">
                    <p>{item}</p>
                    <DeleteIcon className="bin" />
                  </div>
                </li>
              </ul>
            </div>
          )
        })} */}

















      </section>




      <section className="final">
        <button>Add more+</button>
        <button> Delete task</button>
      </section>




    </>
  );
};

export default Edit;
