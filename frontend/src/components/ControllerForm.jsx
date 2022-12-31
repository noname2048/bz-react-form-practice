import { Controller } from "react-hook-form";
import CustomInput from "./CustomInput.js";

const ControllerForm = () => {
  return (
    <Controller name="normal" render={({ field: { value, onChange } }) => null}>
      <CustomInput />
    </Controller>
  );
};

export default ControllerForm;
