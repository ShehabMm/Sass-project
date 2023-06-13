import "./styles/new.css";
import { Link } from "react-router-dom";
// import axios from 'axios'
//  const API_url = 'http://www.omdbapi.com?apikey=ae227408'

//  const getit = () => {
//   axios.get('http://www.omdbapi.com?apikey=ae227408').then((res) => {
//     console.log(res.json())
//   }).catch( (err) => {
//     console.log(err)

//   })
// }

const App = () => {
  return (
    <>
      <main>
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
          <button>Add a new task +</button>
        </section>
      </main>
    </>
  );
};

export default App;
