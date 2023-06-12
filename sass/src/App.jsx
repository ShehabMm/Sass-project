import './styles/new.css'
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
          <button>Newest</button>
          <button>Oldest</button>
          <select>
            <option>All Tasks</option>
            <option>Done</option>
            <option>Unfinished</option>


          </select>
        </section>





        <section className="two">

        </section>



        <section className="three">

        </section>



      </main>
    </>
  );
}

export default App;
