import './App.css'
import './styles/style.css'

const name="ali"
const [state, setstate] = useState(true);
const App=()=> {



  return (
    <>
    <header>
    <p>shehab {true? "ss":"ff"}</p>
    <button>submit</button>


    </header>
  <div className="info">
<h1>Our contact info</h1>
<p>This is our info</p>
  </div>
    </>
  )
}

export default App
