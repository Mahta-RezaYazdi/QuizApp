import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

function Player() {
  const { user } = useContext(UserContext);
  const fullname = `${user.name} ${user.surname}`;
  return (
    <p>
      Player: <b>{fullname}</b>
    </p>
  );
}

export default Player;
