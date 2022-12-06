import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        type="text"
        placeholder="이메일"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {Boolean(errors?.email) ? <p>error</p> : null}
      <input
        type="name"
        placeholder="이름"
        {...register("name", { required: true })}
      />
      {Boolean(errors?.name) ? <p>error</p> : null}
      <button type="submit">로그인</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
