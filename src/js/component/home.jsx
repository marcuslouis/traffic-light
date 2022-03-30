import React, { useState } from "react";
import "../../styles/index.css";
//include images into your bundle

//create your first component
const Home = () => {
	const [changeColor, setChangeColor] = useState("");

	return (
		<div className="traffic-light">
			<div
				onClick={() => setChangeColor("red")}
				className={
					changeColor === "red" ? "lightred select" : "lightred"
				}></div>
			<div
				onClick={() => setChangeColor("yellow")}
				className={
					changeColor === "yellow"
						? "lightyellow select"
						: "lightyellow"
				}></div>
			<div
				onClick={() => setChangeColor("green")}
				className={
					changeColor === "green" ? "lightgreen select" : "lightgreen"
				}></div>
		</div>
	);
};
export default Home;
