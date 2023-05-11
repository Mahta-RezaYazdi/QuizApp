// styled-components
import Button from "./styled/Button";
import { InputFiled } from "./styled/Field";
import Label from "./styled/Label";
import Container from "./styled/Container";
import Span from "./styled/Span";

// user Context
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialErrors = {
  name: false,
  surname: false,
};

function Form() {
  const { user, updateUser } = useContext(UserContext);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const Name_Error = Boolean(!user.name.length && errors.name);
  const Surname_Errror = Boolean(!user.surname.length && errors.surname);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check for errrors
    let isValid = true;
    for (const key of Object.keys(user)) {
      if (!user[key]) {
        setErrors((e) => ({
          ...e,
          [key]: true,
        }));
        isValid = false;
      }
    }

    if (isValid) {
      navigate("/question/1");
    }
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.value.charAt(0).toUpperCase() +
      event.target.value.slice(1).toLowerCase();
    updateUser(name, value);
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Label Error={Name_Error}>
          Name:
          <br />
          <InputFiled
            name="name"
            value={user.name}
            isValid={user.name.length}
            Error={Name_Error}
            onChange={(e) => handleInputChange(e)}
            placeholder="Type your name..."
          />
        </Label>
        {Name_Error && <Span Error>*Name is Required!</Span>}

        <Label Error={Surname_Errror}>
          Surname:
          <br />
          <InputFiled
            name="surname"
            value={user.surname}
            isValid={user.surname.length}
            Error={Surname_Errror}
            onChange={(e) => handleInputChange(e)}
            placeholder="Type your surname..."
          />
        </Label>
        {Surname_Errror && <Span Error>*Surname is Required!</Span>}

        <Button type="submit" onClick={handleSubmit}>
          Start
        </Button>
      </Container>
    </form>
  );
}

export default Form;
