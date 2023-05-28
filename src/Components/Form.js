export const Form = ({ textValue, onSubmitValue, handleChange }) => {
  return (
    <>
      <form onSubmit={onSubmitValue}>
        <input type="text" textValue={textValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
