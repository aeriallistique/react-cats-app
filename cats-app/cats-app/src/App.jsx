import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

import "./App.css";
import FormElement from "./components/FormElement";
import ButtonElement from "./components/ButtonElement";
import axios from "axios";

function App() {
  const [ids, setIds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("abys");
  const [breedID, setBreedID] = useState("");
  const [breedInfo, setBreedInfo] = useState({
    image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    name: "Abyssinian",
    description: `The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.`,
  });

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        const ids = response.data.map((breed) => {
          return breed.id;
        });
        setIds(ids);
      })
      .catch(() => {
        return Promise.reject({ msg: "No cats found", code: 404 });
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`
      )
      .then((response) => {
        setBreedID(response.data[0].id);
      });
  }, [selectedBreed]);

  useEffect(() => {
    if (breedID) {
      axios
        .get(`https://api.thecatapi.com/v1/images/${breedID}`)
        .then((response) => {
          setBreedInfo({
            image: response.data.url,
            name: response.data.breeds[0].name,
            description: response.data.breeds[0].description,
          });
        });
    }
  }, [breedID]);

  return (
    <div className="container-sm border d-flex justify-content-center flex-column mt-4">
      <FormElement
        ids={ids}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        breedInfoName={breedInfo.name || "cats"}
        setBreedInfo={setBreedInfo}
      />
      <ButtonElement text={"Get Random Cat"} />
      <ImageCard breedInfo={breedInfo} />
    </div>
  );
}

export default App;
