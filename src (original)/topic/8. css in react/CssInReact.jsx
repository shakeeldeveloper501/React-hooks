import Card from "./Card";

function NewComponent() {
  return <div className="red">Card</div>;
}

const CssInReact = () => {
  return (
    <>
      <div className="red">CSS</div>
      <h1>This is heading in card</h1>
      <div className="mt-5">
        <NewComponent />
      </div>
      <div>
        <Card/>
      </div>
    </>
  );
};

export default CssInReact;
