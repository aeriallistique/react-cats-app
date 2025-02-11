import Button from 'react-bootstrap/Button';
import axios from 'axios';


const ButtonElement = ({ text, handleClick }) => {

  return (
    <Button
      className='w-50 mx-auto mt-2'
      variant="primary"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonElement;