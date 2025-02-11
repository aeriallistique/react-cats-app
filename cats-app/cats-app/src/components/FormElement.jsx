import Form from "react-bootstrap/Form";
import ButtonElement from "./ButtonElement";
import axios from "axios";

const FormElement = ({
  ids,
  selectedBreed,
  setSelectedBreed,
  breedInfoName,
  setBreedInfo,
}) => {
  function handleClick() {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`
      )
      .then((response) => {
        setBreedInfo((prev) => ({
          ...prev,
          image: response.data[0].url,
        }));
      });
  }

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        className="w-50 mx-auto"
        onChange={(e) => {
          setSelectedBreed(e.target.value);
        }}
      >
        <option>Choose a breed</option>
        {ids.map((id) => {
          return (
            <option key={`${id}`} value={id}>
              {id}
            </option>
          );
        })}
      </Form.Select>
      <ButtonElement
        text={`See another: ${breedInfoName}`}
        handleClick={handleClick}
      />
    </>
  );
};

export default FormElement;
