import "./popup.css";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useState } from "react";

const Popup = ({ data }) => {
  Popup.propTypes = {
    data: PropTypes.func,
  };

  const [array, setarray] = useState([]);
  const [subtask, setsubtask] = useState("");
  const [title, settitle] = useState("");
  const [disbutton, setdisbutton] = useState(false);

  const addFun = () => {
    array.push(subtask);
    setsubtask("");
  };

  return (
    <>
      <form method="POST"  action="">
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
        />
        <input
          onChange={(eo) => {
            setsubtask(eo.target.value);
            console.log(subtask);
          }}
          type="text"
          placeholder="details"
          value={subtask}
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
            }}
          >
            Submit
          </button>
        )}

        {array.map((item) => {
          return (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          );
        })}
      </form>{" "}
    </>
  );
};

export default Popup;
