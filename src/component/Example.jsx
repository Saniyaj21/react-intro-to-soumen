import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Example = () => {
	const user = {
		id: 90,
	};

	return (
		<>
			<button>
				<Link to='/'>Home</Link>
			</button>
			<button>
				<Link to={`/profile/${user.id}`}>profile</Link>
			</button>
		</>
	);
};

export default Example;
