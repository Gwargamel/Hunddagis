import React from "react";
import ReactDOM from "react-dom/client";

function App() {
	const Hello = () => {
		<>
			<h1>Iréne</h1>
		</>;
	};

	/* 1. Gör en komponent Hello som säger ert namn */

	/* 2. Gör så att Hello komponenten tar emot namn och ålder i props och 
        printar ut ert namn och vilket år ni föddes 
        
        <Hello name="Patrik" age={41} /> 
        
        => <div>Patrik 1982</div>
  */

	/* 3. Gör en komponent BacksteetBoys-komponent som renderar en lista med backstreetboys medlemmar
        <ul> 
          <Member name="Nick <3" /> (name ska vara props)
        </ul>
  */

	/* 4. Lägg 4 Member komponenter (Nick, AJ, Kevin, Brian) och lägg in dem i BackstreetBoys-komponenten
    i.e: <ul>
            <Member name="Nick <3" />
            <Member name="AJ <3" />
            <Member name="Kevin <3" />
            <Member name="Brian <3" />
         </ul>
  */
	return <></>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
