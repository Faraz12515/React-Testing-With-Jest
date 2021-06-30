import React from "react";

function Home({ name }) {
  return (
    <div data-testid="newid">
      <p className="p1">Faraz</p>
      <p className="p2">Ali</p>
      <div>
        <h1>New Name</h1>
        <p className="p3">Furqan</p>
      </div>
    </div>
  );
}

export default Home;
