import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Profile = () => {
	const { id } = useParams();
	const user = [
		{
			name: "sani",
			id: 9,
		},
		{
			name: "soumen",
			id: 8,
		},
	];
	useEffect(() => {
		console.log(id);
	}, [id]);

	return <>{user && user.map((item) => <Card item={item} />)}</>;
};

export default Profile;
