import "./styles/new.css";
import { Link } from "react-router-dom";
import Popup from "./pages/popup/popup"
import axios from 'axios'
import { useState, useEffect } from 'react';


const getit = async () => {
  await axios.get('http://www.omdbapi.com?apikey=ae227408').then((res) => {
    console.log(res.json())
  }).catch((err) => {
    console.log(err)

  })
}




const App = () => {
  const [model, setmodel] = useState(false);

  const alter = () => {
    setmodel(false)
  }


  useEffect(() => {

  }, []);
  return (
    <>
      <main>
        {model && <Popup data={alter} />}
        <section className="one">
          <button className="myButton">Newest</button>
          <button className="myButton">Oldest</button>
          <select>
            <option>All Tasks</option>
            <option>Done</option>
            <option>Unfinished</option>
          </select>
        </section>

        <section className="two">
          <article>
            <Link to={"/edit"}>
              <h2>New Task</h2>
              <ul>
                <li>sub task 1</li>
                <li> sub task 1</li>
              </ul>
              <p>a day ago</p>
            </Link>
          </article>

          <article>
            <h2>New Task</h2>
            <ul>
              <li>sub task 1</li>
              <li> sub task 1</li>
            </ul>
            <p>a day ago</p>
          </article>

          <article>
            <h2>New Task</h2>
            <ul>
              <li>sub task 1</li>
              <li> sub task 1</li>
            </ul>
            <p>a day ago</p>
          </article>

          <article>
            <h2>New Task</h2>
            <ul>
              <li>sub task 1</li>
              <li> sub task 1</li>
            </ul>
            <p>a day ago</p>
          </article>
        </section>

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
