import React from "react";

const ReactBehindScene = () => {
  let name = "Ali";
  return (
    <div>
      {/* Stage 1 */}
      <h1>Helo world</h1>
      {React.createElement("h1", null, "Helo world")}

      {/* Stage 2 */}
      <div className="hero">Helo world</div>
      {React.createElement("div", { className: "hero" }, "Helo world")}

      {/* Stage 3 */}
      <div className="hero" style={{ backgroundColor: "green" }}>
        Helo world
      </div>
      {React.createElement(
        "div",
        { className: "hero", style: { backgroundColor: "green" } },
        "Helo world",
      )}

      {/* Stage 4 */}
      <h1>{name}</h1>
      {React.createElement("h1", null, name)}

      {/* Stage 5 */}
      <h1>My name is {name}</h1>
      {React.createElement("h1", null, `My name is ${name}`)}

      {/* Stage 6 */}
      <div>
        <h1 style={{ backgroundColor: "red" }}>Hy</h1>
      </div>

      {React.createElement(
        "div",
        null,
        React.createElement("h1", { style: { backgroundColor: "red" } }, "Hy"),
      )}

      {/* Stage 7 */}
      <div>
        <h1 style={{ backgroundColor: "red" }}>Hy</h1>
        <h2 style={{ backgroundColor: "green" }}>Hy</h2>
      </div>

      {React.createElement(
        "div",
        null,
        React.createElement("h1", { style: { backgroundColor: "red" } }, "Hy"),
        React.createElement(
          "h2",
          { style: { backgroundColor: "green" } },
          "Hy",
        ),
      )}
    </div>
  );
};

export default ReactBehindScene;

