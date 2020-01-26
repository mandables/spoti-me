import React from 'react';

function ResultsRow(props) {
	const { name, artist, album } = props.info;
	return (
		<tr>
			<td>{name}</td>
			<td>{artist}</td>
			<td>{album}</td>
			<td>
				<button value="Add to Playlists">Add to Playlists</button>
			</td>
		</tr>
	);
}
export default ResultsRow;
