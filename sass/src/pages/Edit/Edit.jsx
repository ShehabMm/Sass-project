import "./Edit.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();


  const del = async () => {

    await axios.delete(`http://localhost:8080/api/${id}`).then((res) => {
      console.log(res)
    }).catch((err) => {

      console.log(err)

    })

  }








  useEffect(() => {
    axios.get(`http://localhost:8080/api/${id}`).then((res) => {
      console.log(res.data.data.details);
      setposts(res.data.data.details);
      setpostsTitle(res.data.data.title);
    });
  }, [id]);

  const [posts, setposts] = useState([]);
  const [postsTitle, setpostsTitle] = useState([]);

  console.log(posts);



  return (
    <>
      <div className="edit-page">
        <input type="text" defaultValue={postsTitle}></input>
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

        {posts.map((item) => {
          console.log(item);

          return (
            <div key={item}>
              <ul>
                <li className="card">
                  <div className="in">
                    <p>{item}</p>
                    <DeleteIcon className="bin" />
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </section>

      <section className="final">
        <button>Add more+</button>
        <button
          onClick={() => {
            del();
            navigate('/')
          }}
        >
          {" "}
          Delete task
        </button>
      </section>
    </>
  );
};

export default Edit;
