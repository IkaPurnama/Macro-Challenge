const Button = (props) => {
  const { children, variant } = props;
  return (
    <>
      <button className={` rounded px-3 py-2 text-white fw-bold w-100 mt-3  `}>
        {children}
      </button>
    </>
  );
};

export default Button;
