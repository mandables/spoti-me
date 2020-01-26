import React from 'react';

function PlaylistRow(props) {
	const { name, artist, album, id } = props.info;
	return (
		<tr>
			<td>
				{name}
				<input onClick={() => props.selectPlaylist(id)} value={id} type="checkbox" />
			</td>
		</tr>
	);
}
export default PlaylistRow;
