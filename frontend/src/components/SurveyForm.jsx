import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const storageFormValue = atom({
  key: "formValue",
  default: JSON.stringify(""),
});

const SurveyForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage,
    exclude: ["baz"],
  });

  const [formValue, setFormValue] = useRecoilState(storageFormValue);

  const subscription = watch((value, { name, type }) => {
    localStorage.setItem("form", JSON.stringify(value));
    const temp = JSON.stringify(value);
    setFormValue(temp);
    console.log(value, name, type);
  });

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
      <button type="submit">submit</button>
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
