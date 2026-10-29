const SimpleCB = () => {
  return (
    <>
      <label htmlFor="anyId">
        <input
          id="anyId"
          type="checkbox"
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
        Check box
      </label>
    </>
  );
};

export default SimpleCB;
