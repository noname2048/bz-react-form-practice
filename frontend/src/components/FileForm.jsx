import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function FileForm() {
  const { register, handleSubmit } = useForm();
  async function handleChange(e) {
    console.log(e);
  }
  const onSubmit = async (d) => {
    console.log(d);
    const res = await fetch(d?.signedUrl, {
      method: "POST",
      headers: {
        "X-Goog-Content-Length-Range": "1,10000000",
        "x-goog-acl": "public-read",
        "Content-Type": "image/png",
        Host: "storage.googleapis.com",
      },
      body: d?.filepath,
    });
    console.log(res);
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label>signed url</label>
        <textarea cols="10" {...register("signedUrl")} />
        <label>file path</label>
        <input type="text" {...register("filepath")} />
        <label>file</label>
        <input
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          {...register("file")}
        />
        <button type="submit">submit</button>
      </FormContainer>
    </div>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 3rem 0;
`;
