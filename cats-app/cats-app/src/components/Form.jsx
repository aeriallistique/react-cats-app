import Form from 'react-bootstrap/Form';
import ButtonElement from './ButtonElement';
import { useState } from 'react';


const FormElement = ({ ids, setSelectedBreedId }) => {
  function handleClick(e) {
    console.log(e.target);

  }
  const [selectText, setSelectText] = useState('Choose a breed');
  return (
    <>
      <Form.Select
        aria-label="Default select example"
        className='w-50 mx-auto'
        onChange={(e) => {
          setSelectedBreedId(e.target.value);
          setSelectText(e.target.selectedOptions[0].text);
        }}
      >
        <option value={selectText}>{selectText}</option>
        {ids.map((obj) => {
          return <option key={`${obj.id}${Math.random()} ${Date.now()}`} value={obj.id}>{obj.name}</option>;
        })}
      </Form.Select>

      <ButtonElement
        text={`See more ${selectText}`} handleClick={handleClick} />
    </>
  );
};

export default FormElement;