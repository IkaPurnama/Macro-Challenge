import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { type, name, placeholder, label } = props;
  return (
    <>
      <div class="mb-4">
        <Label htmlFor={name} label={label} />
        <Input name={name} type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputForm;
