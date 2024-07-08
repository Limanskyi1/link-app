export const FormButton = ({ children, className }) => {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};
