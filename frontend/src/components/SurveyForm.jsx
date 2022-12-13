import { useForm } from "react-hook-form";
import styled from "styled-components";

const SurveyForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const subscription = watch((value, { name, type }) =>
    console.log(value, name, type)
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이름</label>
      <input type="text" {...register("email")} />
      <label htmlFor="memo">메모</label>
      <textarea
        name="memo"
        cols="30"
        rows="10"
        {...register("memo")}
      ></textarea>
    </FormContainer>
  );
};

export default SurveyForm;

const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
`;
