import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@mui/material";
import CustomInput from "./CustomInput.jsx";
import { useEffect } from "react";
import MyButton from "./MyButton";

const ControllerForm = () => {
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
  }, [watch]);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <p>HI</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <MyButton text="버튼" />
      </form>
    </>
  );
};

export default ControllerForm;
