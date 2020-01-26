import React from 'react';
import PlaylistRow from './PlaylistRow';

function PlaylistTable(props) {
	let rows = () => {
		if (props.playlists) {
			return props.playlists.map((playlist, index) => {
				return <PlaylistRow selectPlaylist={props.selectPlaylist} key={index} info={playlist} />;
			});
		}
	};
	return (
		<table className="playlist">
			<thead>
				<tr className="t-header">
					<th>Playlists</th>
				</tr>
			</thead>
			<tbody>{rows()}</tbody>
		</table>
	);
}
export default PlaylistTable;
