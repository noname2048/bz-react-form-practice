import { useForm } from "react-hook-form";
import styled from "styled-components";

const SurveyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이름</label>
      <input type="text" {...register("email")} />
      <label htmlFor="memo">메모</label>
      <textarea
        name="memo"
        cols="30"
        rows="10"
        {...register("memo")}
      ></textarea>
    </form>
  );
};

export default SurveyForm;
