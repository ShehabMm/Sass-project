import "./Edit.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
//http://localhost:8080


useEffect(() => {
  axios.get(`https://mongo-project-4wtk.onrender.com/api/${id}`).then((res) => {
    setposts(res.data.data.details);
    setpostsTitle(res.data.data.title);
  });
}, [id]);







  const put = async () => {
    await axios
      .put(`https://mongo-project-4wtk.onrender.com/api/${id}`, { title: inputValue })
      .then((res) => {
        console.log(res.data.data.title);
        console.log("hhhh");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const del = async () => {
    await axios
      .delete(`https://mongo-project-4wtk.onrender.com/api/${id}`)
      .then((res) => {
        console.log(res.data.data.details);
        setdetails(res.data.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  const [posts, setposts] = useState([]);
  const [postsTitle, setpostsTitle] = useState("");

  console.log(posts);

  const [inputValue, setinputValue] = useState("");
  const [dis, setdis] = useState(true);
  const [details, setdetails] = useState([]);

  return (
    <>
      <div className="edit-page">
        <input
          onChange={(eo) => {
            setinputValue(eo.target.value);
            console.log(details)
          }}
          type="text"
          defaultValue={postsTitle}
          disabled={dis}
          style={{ border: dis ? null : "2px solid red" }}
        ></input>
        <button
          onClick={() => {
            setdis(false);
            console.log(inputValue);
          }}
          style={{ marginLeft: "15px", cursor: "pointer" }}
        >
          {dis === true ? "Change Title" : null}
        </button>

        {dis === false && (
          <button
            onClick={(eo) => {
              eo.preventDefault();
              setdis(false);
              put();

              location.reload();
            }}
            style={{ marginLeft: "15px", cursor: "pointer" }}
          >
            Submit
          </button>
        )}
      </div>

      <section className="main-component">
        <div className="inside">
          <p>Create an hour ago</p>
          <div>
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
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </section>

      <section className="final">
        <button
          onClick={() => {
            del();
            navigate("/");
          }}
        >
          Delete task
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>

      </section>
    </>
  );
};

export default Edit;
