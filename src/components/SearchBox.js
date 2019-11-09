import React from 'react';

const SearchBox=({searchfield, searchChange})=>{
	return(
		<div>
			<input type = "search" placeholder="Search Robots" className = "b--green pa3 bg-lightest-blue" onChange={searchChange}/>
		</div>
		)
}

export default SearchBox;