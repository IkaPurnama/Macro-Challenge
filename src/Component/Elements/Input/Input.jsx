const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={type}
        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
