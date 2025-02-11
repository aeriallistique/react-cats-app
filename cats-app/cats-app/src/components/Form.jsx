import Form from 'react-bootstrap/Form';
import ButtonElement from './Button';


const FormElement = ({ ids, setSelectedBreed }) => {


  return (
    <>
      <Form.Select
        aria-label="Default select example"
        className='w-50 mx-auto'
        onChange={(e) => {
          setSelectedBreed(e.target.value);
        }}
      >
        <option>Choose a breed</option>
        {ids.map((id) => {
          return <option key={`${id} ${Date.now()}`} value={id}>{id}</option>;
        })}
      </Form.Select>
      <ButtonElement text={'See more'} />
    </>
  );
};

export default FormElement;