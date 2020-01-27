import React from "react";

function PlaylistRow(props) {
  const { name, id } = props.info;

  const truncateName = name => {
    return name.length > 20 ? name.slice(0, 20) + "..." : name;
  };
  return (
    <tr>
      <td>
        {truncateName(name)}
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
