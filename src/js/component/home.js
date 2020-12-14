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
		setInterval(() => {
			this.setState({ currentLight: "green" });
		}, 3000);
	}
	render() {
		return (
			<div className="text-center mt-5">
				<div className="traffic-light d-flex justify-content-center mx-auto flex-column">
					<div
						className={
							this.state.currentLight == "red"
								? "light red"
								: "light"
						}
					/>
					<div
						className={
							this.state.currentLight == "yellow"
								? "light yellow"
								: "light"
						}
					/>
					<div
						className={
							this.state.currentLight == "green"
								? "light green"
								: "light"
						}
					/>
				</div>
			</div>
		);
	}
}
