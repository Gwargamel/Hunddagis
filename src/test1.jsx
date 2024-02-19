import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return <div>Header</div>;
};

const Product = (props) => {
	return <li>{props.doft}</li>;
};

const Content = () => {
	return (
		<ul>
			<Product doft="Lavendel" />
			<Product doft="Honung" />
			<Product doft="Jägermeister" />
		</ul>
	);
};

const Footer = () => {
	return <div>Footer</div>;
};

const App = (props) => {
	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
