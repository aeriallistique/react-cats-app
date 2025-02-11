import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ImageCard = ({ breedInfo }) => {
  return (
    !breedInfo ? <p className="mx-auto">Please select a breed</p> :
      <Card style={{ width: '18rem' }} className='w-50 mx-auto'>
        <Card.Img variant="top" src={breedInfo?.image || null} alt='a cute cat starring at you' />
        <Card.Body>
          <Card.Title>
            {breedInfo?.name || null}
          </Card.Title>
          <Card.Text>
            {breedInfo?.description || null}
          </Card.Text>
        </Card.Body>
      </Card>

  );


};

export default ImageCard;
