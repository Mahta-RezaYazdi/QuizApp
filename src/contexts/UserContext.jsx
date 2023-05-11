import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const initialUser = {
  name: "",
  surname: "",
};

function UserProvider({ children }) {
  const [user, setUser] = useState(initialUser);

  const updateUser = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.elementType,
  ]).isRequired,
};

export default UserProvider;
