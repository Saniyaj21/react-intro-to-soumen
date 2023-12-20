import { useState } from "react";
import "./App.css";
import Example from "./component/Example";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";

function App() {
	return (
		<Router>
			<Example />
			<Routes>

				<Route path='/' element={<Home />} />
				<Route path='/profile/:id' element={<Profile />} />

			</Routes>

		</Router>
	);
}

export default App;

// props
// useState
// useEffect
// optional channing
// && operator
// routing
// hooks - > useStaet, useEffect, useParams, usenavigate
// url params
// map


// state management -> contextApi, reduxToolKit
