import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}
