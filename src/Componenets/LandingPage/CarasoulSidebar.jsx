import React from "react";
import "/src/Componenets/LandingPage/Carasoul.jsx";
import Button from '@mui/material/Button';
export default function CarasoulSidebar(props) {
	return (
		<div className="SideBar_C">
			<h1>{props.title}</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
				nec tincidunt est, quis rhoncus sem. Mauris scelerisque eros sed
				odio dictum, eu tincidunt risus luctus. Pellentesque et aliquet
				mi. Maecenas porttitor cursus dolor ut maximus. Vestibulum
				blandit ipsum laoreet, viverra sem vitae, accumsan odio. Mauris
				a semper risus. Cras facilisis massa at mauris tempor rhoncus.
				Phasellus ornare finibus nisl quis vehicula. Quisque non
				condimentum mauris, ac fringilla purus. Proin non mauris nec
				felis vestibulum laoreet. Vestibulum sodales dolor at sapien
				tincidunt, a sodales mauris tempus. Nam eu velit quam. Quisque
				eget interdum purus, posuere porttitor eros.
			</p>
		</div>
	);
}
