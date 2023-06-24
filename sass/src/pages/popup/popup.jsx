import "./popup.css";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from 'axios'

const Popup = ({ data }) => {
  Popup.propTypes = {
    data: PropTypes.func,
  };



  
    
    



  const [array, setarray] = useState([]);
  const [subtask, setsubtask] = useState("");
  const [title, settitle] = useState("");
  const [disbutton, setdisbutton] = useState(false);




const add = () => {

  axios.post('http://localhost:8080/post', {
      title:title,
      details:subtask    
      }).then((res) => {
        console.log(res.data)
      }).catch((err)=>{

console.log(err)

      })
  
}

  

const addFun = () => {
  array.push(subtask);
  
};
  return (
    <>
      <form method="POST"  action="http://localhost:8080/post">
        <CloseIcon
          className="close"
          onClick={() => {
            data();
          }}
        />

        <input
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
          type="text"
          placeholder="title"
          name="title"
        
        />
        <input
          onChange={(eo) => {
            setsubtask(eo.target.value);
            console.log(subtask);
          }}
          type="text"
          placeholder="details"
          name="details"
        />

        <button
          onClick={(eo) => {
            eo.preventDefault();
            addFun();
            setdisbutton(true);
          }}
        >
          Add
        </button>

        {disbutton && (
          <button
            onClick={(eo) => {
              eo.preventDefault();
              setarray([])
              add()
            }}
          >
            Submit
          </button>
        )}

        {array.map((item) => {
          return (
            <ul key={item._id}>
              <li>{item}</li>
            </ul>
          );
        })}
      </form>{" "}
    </>
  );
};

export default Popup;
