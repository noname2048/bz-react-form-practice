import { Controller, useForm } from "react-hook-form";
import { checkbox } from "@material-ui/core";
import CustomInput from "./CustomInput.jsx";

const ControllerForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => null}
      />
      <CustomInput />
    </form>
  );
};

export default ControllerForm;
