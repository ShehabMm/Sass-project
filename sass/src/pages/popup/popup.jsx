import "./popup.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
const Popup = ({ data }) => {
  Popup.propTypes = {
    data: PropTypes.func,
  };

  const addFun = () => {
    array.push(subtask);
    setsubtask("");
  };

  const [array, setarray] = useState([]);
  const [subtask, setsubtask] = useState("");
  const [title, settitle] = useState("");
  const [disbutton, setdisbutton] = useState(false);
  const [showloading, setshowloading] = useState(true);
  const [showtask, setshowtask] = useState(false);

  const add = () => {
    axios
      .post("http://localhost:8080/post", {
        title: title,
        details: array,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ref = useRef(null);
  const def = useRef(null);
  const onClear = () => {
    ref.current.value = "";
    def.current.value = "";
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <form method="POST" action="http://localhost:8080/post">
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
          ref={def}
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          onChange={(eo) => {
            setsubtask(eo.target.value);
            console.log(subtask);
          }}
          ref={ref}
          type="text"
          placeholder="details"
          name="details"
        />

        <button
          onClick={(eo) => {
            eo.preventDefault();

            setdisbutton(true);
            addFun();
            onClear();
          }}
        >
          Add
        </button>

        {disbutton && (
          <button
            onClick={(eo) => {
              eo.preventDefault();
              add();
              onClear();
              setarray([]);
              setshowloading(false);
              setTimeout(() => {
                setshowloading(true);
                setshowtask(true);
              }, 1000);

              setTimeout(() => {
                data();
              }, 3000);

              setTimeout(() => {
                refreshPage();
              }, 3000);

            }}
          >
            {showloading ? (
              "submit"
            ) : (
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={20}
                width={20}
                className="loading"
              />
            )}
          </button>
        )}

        <p style={{ opacity: showtask ? 0.9 : 0 }} className="task">
          Task added successfully
          <CheckIcon className="check" />
        </p>

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
