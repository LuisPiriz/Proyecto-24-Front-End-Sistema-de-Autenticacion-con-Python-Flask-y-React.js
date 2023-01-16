import React from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => (
	<>
		<Characters/>
		<Planets/>
		<Vehicles/>

	</>
);
