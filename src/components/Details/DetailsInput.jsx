export const DetailsInput = ({
  name,
  onChangeInput,
  inputName,
  value,
  error,
}) => {
  return (
    <>
      <div className="item">
        <span>{name}</span>
        <input
          name={inputName}
          onChange={(e) => onChangeInput(e, inputName)}
          type="text"
          value={value}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </>
  );
};
