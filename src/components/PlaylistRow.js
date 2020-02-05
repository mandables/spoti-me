import React, { useState } from "react";
import { truncate } from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

const check = <FontAwesomeIcon icon={faCheck} />;
const minus = <FontAwesomeIcon icon={faMinus} />;

function PlaylistRow(props) {
  const { name, id } = props.info;
  const [selected, setSelected] = useState(false);

  const renderSelectIcon = id => {
    props.selectPlaylist(id);
    setSelected(!selected);
  };

  return (
    <tr>
      <td>
        {truncate(name)}
        {/* <input
          onClick={() => props.selectPlaylist(id)}
          value={id}
          type="checkbox"
        /> */}
        {/* <p id="selector">{element}</p> */}
        <p onClick={() => renderSelectIcon(id)} id="selector">
          {selected ? check : minus}
        </p>
      </td>
    </tr>
  );
}
export default PlaylistRow;
