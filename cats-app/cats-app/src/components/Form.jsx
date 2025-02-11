import Form from 'react-bootstrap/Form';
import ButtonElement from './ButtonElement';
import { useState } from 'react';
import axios from 'axios';


const FormElement = ({ ids, setSelectedBreedId, selectedBreedId, setBreedInfo }) => {
  const [selectText, setSelectText] = useState('Choose a breed');
  const [breedID, setBreedID] = useState('null');

  function handleClick(e) {
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`)
      .then(response => {
        setBreedInfo((prevBreed => ({
          ...prevBreed,
          image: response.data[0].url
        })));
      });

  }

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        className='w-50 mx-auto'
        onChange={(e) => {
          setBreedID(e.target.options[e.target.options.selectedIndex].dataset.info);
          setSelectedBreedId(e.target.value);
          setSelectText(e.target.selectedOptions[0].text);
        }}
      >
        <option value={selectText}>{selectText}</option>
        {ids.map((obj) => {
          return <option key={`${obj.id}${Date.now()}${Math.random() * 256}`} value={obj.id} data-info={obj.breedId} >{obj.name}</option>;
        })}
      </Form.Select>

      <ButtonElement
        text={`See more ${selectText}`} handleClick={handleClick} />
    </>
  );
};

export default FormElement;