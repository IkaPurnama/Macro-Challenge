const Label = (props) => {
  const { htmlFor, label } = props;
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm  font-medium text-gray-700"
      >
        {label}
      </label>
    </>
  );
};

export default Label;
