import React from "react";

const Card = ({ id, name, email }) =>{
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc">
			<img src={`https://www.robohash.org/${id} ?200x200`} alt="robots"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;