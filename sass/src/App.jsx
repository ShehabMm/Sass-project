import "./styles/new.css";
import { Link } from "react-router-dom";
import Popup from "./pages/popup/popup"
import axios from 'axios'
import { useState, useEffect } from 'react';







const App = () => {
  const [model, setmodel] = useState(false);

  const alter = () => {
    setmodel(false)
  }


  useEffect(() => {


    axios.get('http://localhost:8080/api').then((response) => {
      setnotes(response.data.data)
      console.log(response.data.data)}
    )

      axios.post('http://localhost:8080/post').then((response) => {
        setnotes(response.data.data)
        console.log(response.data.data
        )

      })


    }, [])




    const [note, setnotes] = useState([]);
    return (
      <>
        <main>
          {model && <Popup data={alter} />}

          <section className="one">
            <button className="myButton">Newest</button>
            <button onClick={() => {
            }} className="myButton">Oldest</button>

            <select>
              <option>All Tasks</option>
              <option>Done</option>
              <option>Unfinished</option>
            </select>
          </section>


          {note.map((item) => {
            return (

              <section key={item._id} className="two">


                <article>
                  <Link to={"/edit"}>
                    <h2>{item.title}</h2>
                    <ul>
                      <li>{item.details}</li>
                      <li> sub task 1</li>
                    </ul>
                    <p>a day ago</p>
                  </Link>
                </article>

              </section>

            )
          })}


          <section className="three">
            <button onClick={() => {

              setmodel(true)

            }}>Add a new task +</button>
          </section>
        </main>


      </>
    );
  };

  export default App;
