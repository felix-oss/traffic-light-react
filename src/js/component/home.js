import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			currentLight: ""
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ currentLight: "red" });
		}, 3000);
	}
	componentDidUpdate() {
		const circles = document.querySelectorAll(".light");
		let activeLight = 0;

		setInterval(() => {
			changeLight();
		}, 1000);

		function changeLight() {
			circles[activeLight].className = "light";
			activeLight++;

			if (activeLight > 2) {
				activeLight = 0;
			}

			const currentLight = circles[activeLight];

			currentLight.classList.add(currentLight.getAttribute("color"));
		}
	}
	render() {
		return (
			<div className="text-center mt-5">
				<div className="traffic-light d-flex justify-content-center mx-auto flex-column">
					<div className="light" color="red" />
					<div className="light" color="yellow" />
					<div className="light" color="green" />
				</div>
			</div>
		);
	}
}
