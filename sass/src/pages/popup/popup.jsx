import './popup.css';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types'

Popup.propTypes = {

data: PropTypes.func

}

const Popup = ({data}) => {
  return (
    <>
      <form >

<CloseIcon className='close'  onClick={() => {

data()
          }} />
    
      <input type="text" placeholder="write" />
      <button>submit</button>
      </form>    </>
  );
}

export default Popup;
