import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

import "./App.css";
import FormElement from "./components/Form";
import ButtonElement from "./components/ButtonElement";
import axios from "axios";

function App() {
  const [ids, setIds] = useState([]);

  const [selectedBreedId, setSelectedBreedId] = useState(null);
  const [breedInfo, setBreedInfo] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        const ids = response.data.map((breed) => {
          return { id: breed.reference_image_id, name: breed.name, breedId: breed.id };
        });
        setIds(ids);
      })
      .catch(() => {
        return Promise.reject({ msg: "No cats found", code: 404 });
      });
  }, []);

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/${selectedBreedId}`)
      .then(response => {
        console.log(response);
        setBreedInfo({
          image: response.data.url,
          name: response.data.breeds[0].name,
          description: response.data.breeds[0].description
        });
      });
  }, [selectedBreedId]);

  const fetchRandomCat = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search`)
      .then((resp) => {
        setBreedInfo({ image: resp.data[0].url });
      });
  };


  return (
    <div className='container-sm border d-flex justify-content-center flex-column mt-4'>
      <FormElement
        ids={ids}
        setSelectedBreedId={setSelectedBreedId}
        selectedBreedId={selectedBreedId}
        setBreedInfo={setBreedInfo}
      />
      <ButtonElement
        text={'Get Random Cat'}
        handleClick={fetchRandomCat}
      />
      <ImageCard
        breedInfo={breedInfo} />
    </div>
  );
}

export default App;
