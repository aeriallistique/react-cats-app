import Form from "react-bootstrap/Form";
import ButtonElement from "./ButtonElement";

const FormElement = ({
  ids,
  selectedBreed,
  setSelectedBreed,
  breedInfoName,
}) => {
  function handleClick() {
    console.log(`button`);
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
            <option key={`${id} ${Date.now()}`} value={id}>
              {id}
            </option>
          );
        })}
      </Form.Select>
      <ButtonElement
        text={`See more ${breedInfoName}`}
        handleClick={handleClick}
      />
    </>
  );
};

export default FormElement;
