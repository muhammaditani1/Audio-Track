import { Fragment, useState } from "react";
import datas from "./Data.js";
import Card from "./components/Card.js";

function App() {
  return (
    <Fragment>
      {datas.map((data) => (
        <ul key={data.id} style={{ display: "inline-block" }}>
          <Card
            id={data.id}
            title={data.title}
            numberOfTracks={data.numberOfTracks}
            description={data.description}
            miniDescription={data.miniDescription}
            image={data.image}
            alt={data.alt}
          />
        </ul>
      ))}
    </Fragment>
  );
}

export default App;
