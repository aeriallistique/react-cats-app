import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

import './App.css';
import FormElement from './components/Form';
import ButtonElement from './components/Button';
import axios from 'axios';

function App() {
  const [ids, setIds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedID, setBreedID] = useState('');
  const [breedInfo, setBreedInfo] = useState({ image: '', name: '', description: '' });

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        const ids = response.data.map((breed) => {
          return breed.id;
        });
        setIds(ids);
      })
      .catch((err) => {
        return Promise.reject({ msg: 'No cats found', code: 404 });
      });
  }, []);

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`)
      .then(response => {
        setBreedID(response.data[0].id);
      });
    axios.get(`https://api.thecatapi.com/v1/images/${breedID}`)
      .then(response => {
        setBreedInfo({
          image: response.data.url,
          name: response.data.breeds[0].name,
          description: response.data.breeds[0].description
        });
      });
  }, [selectedBreed]);

  return (
    <div className='container-sm border d-flex justify-content-center flex-column mt-4'>
      <FormElement ids={ids} setSelectedBreed={setSelectedBreed} />
      <ButtonElement text={'Get Random Cat'} />
      <ImageCard breedInfo={breedInfo} />
    </div>
  );
}

export default App;
