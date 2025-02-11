import Button from 'react-bootstrap/Button';

const ButtonElement = ({ text }) => {
  return (

    <Button className='w-50 mx-auto mt-2' variant="primary">{text}</Button>
  );
};

export default ButtonElement;