import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ breedInfo }) => {

  return (
    <Card style={{ width: '18rem' }} className='w-50 mx-auto'>
      <Card.Img variant="top" src={breedInfo.image || null} alt='a cute cat starring at you' />
      <Card.Body>
        <Card.Title>{breedInfo.name}</Card.Title>
        <Card.Text>
          {breedInfo.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;