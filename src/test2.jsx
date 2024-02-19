import React from "react";
import ReactDOM from "react-dom/client";

const Spice = (props) => {
	return <li>{props.name} {props.description} {props.price} {props.weight}</li>;
};

const Content = (props) => {
	return (
		<ul>
			<Spice name="Kanel" description="Julkrydda" price={1} weight={50}/>
			<Spice name="Curry" description="Indisk krydda" price={2} weight={50}/>
		</ul>
	);
};

const App = (props) => {
	return (
		<div>
			<Spice />
			<Content />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
