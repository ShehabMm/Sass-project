import "./styles/new.css";
import Popup from "./pages/popup/popup";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [model, setmodel] = useState(false);
  const navigate = useNavigate();

  const alter = () => {
    setmodel(false);
  };

  const sort = () => {
    axios.get("http://localhost:8080/sort").then((res) => {
      setnotes(res.data.data);
    });
  };

  const old = () => {
    axios.get("http://localhost:8080/sortOld").then((res) => {
      setnotes(res.data.data);
    });
  };





  useEffect(() => {
    axios.get("http://localhost:8080/api").then((response) => {
      setnotes(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  const [note, setnotes] = useState([]);

  return (
    <>
      <main>
        {model && <Popup data={alter} />}

        <section className="one">


        <button
            onClick={() => {
              setmodel(true);

            }}
            className="myButton"
          >
            Add a new Task
          </button>

          <button
            onClick={() => {
              sort();
            }}
            className="myButton"
          >
            Newest
          </button>
          <button onClick={() => {
old()

          }} className="myButton">
            Oldest
          </button>

        </section>

        {note.map((item) => {
          return (
            <section key={item._id} className="two">
              <article
                onClick={() => {
                  navigate(`/edit/${item._id}`);
                }}
              >
                <div key={item}>
                  <h2>{item.title}</h2>

                  {item.details.map((item, index) => {
                    if (index < 2) {
                      return (
                        <div key={item.index}>
                          <ul>
                            <li>{item}</li>
                          </ul>
                        </div>
                      );
                    }
                  })}
                  <p>Show more..</p>
                </div>
              </article>
            </section>
          );
        })}

        <section className="three">
          <button
            onClick={() => {
              setmodel(true);
            }}
          >
            Add a new task +
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
