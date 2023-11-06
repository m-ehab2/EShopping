import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import myImage1 from "/home/mehab2/EShopping/src/Assets/Pics/jenny-hill-iP_e0k48g18-unsplash.jpg";
import myImage2 from "/home/mehab2/EShopping/src/Assets/Pics/people-working-out-indoors-together-with-dumbbells.jpg";
import myImage3 from "/home/mehab2/EShopping/src/Assets/Pics/young-couple-doing-yoga-lake.jpg";
import "@splidejs/react-splide/css";
import "/home/mehab2/EShopping/src/Styles/Carasoul.css";
import CarasoulSidebar from "./CarasoulSidebar";
export default function NeuCarasoul() {
	const thisComponentStyle = {
		// objectFit: 'contain',
		// width:'1000px'
	};
	return (
		<div className="">
			<Splide
				options={{
                    cover:true,
					autoplay: true,
					rewind: true,
					gap: "1rem",
					height: "500px",
					focus: "center",
					autoHeight: true,
					interval: 3000,
				}}
				aria-label="My Favorite Images"
			>
				<SplideSlide>
                    <CarasoulSidebar title={'Your Everyday Sports wear!'}/>
					<img
						src={myImage1}
						alt="Image 1"
						style={thisComponentStyle}
					/>
				</SplideSlide>
				<SplideSlide>
                <CarasoulSidebar title={'Hit it In the Gym!'}/>
					<img
						src={myImage2}
						alt="Image 2"
						style={thisComponentStyle}
					/>
				</SplideSlide>
				<SplideSlide>
                <CarasoulSidebar title={'Unleash your inner self!'}/>
					<img
						src={myImage3}
						alt="Image 2"
						style={thisComponentStyle}
					/>
				</SplideSlide>
			</Splide>
		</div>
	);
}
