import React from "react";
import { truncate} from "../utils/helpers";

function PlaylistRow(props) {
  const { name, id } = props.info;

  return (
    <tr>
      <td>
        {truncate(name)}
        <input
          onClick={() => props.selectPlaylist(id)}
          value={id}
          type="checkbox"
        />
      </td>
    </tr>
  );
}
export default PlaylistRow;
