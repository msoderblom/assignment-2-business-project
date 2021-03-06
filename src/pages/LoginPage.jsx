import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormStyledInput from "../components/FormStyledInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import UserKit from "../data/UserKit";
import HeadingPage from "../atoms/HeadingPage";
import { Error } from "../components/FormStyledInput";
import styled from "styled-components";
import ButtonStyled from "../components/ButtonStyled";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is requried."),
  password: yup.string().required("Password is required."),
});

const LoginError = styled(Error)`
  font-size: 1em;
`;

const FormStyled = styled.form`
  display: grid;
  gap: 8px;
`;

export default function LoginPage() {
  const userKit = new UserKit();

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }
  function handleLogin(data) {
    const loginEmail = data.email;
    const loginPassword = data.password;

    userKit.login(loginEmail, loginPassword).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          userKit.setToken(data.token);
          history.push("/home");
        });
      } else {
        setError("credentials", {
          type: "manual",
          message:
            "Unable to sign in with the credentials provided. Try again.",
        });
      }
    });
  }

  return (
    <div>
      {uid && token ? (
        <div>
          <HeadingPage>Activate Account</HeadingPage>
          <ButtonStyled
            onClickFunc={handleActivateUser}
            title="Activate User"
          />
        </div>
      ) : (
        <div>
          <HeadingPage>Login</HeadingPage>
          <FormStyled onSubmit={handleSubmit(handleLogin)}>
            <LoginError> {errors.credentials?.message}</LoginError>

            <FormStyledInput
              label="Email"
              name="email"
              placeholder="name@email.com"
              register={register}
              inputType="email"
              error={errors.email?.message}
            />
            <FormStyledInput
              label="Password"
              name="password"
              register={register}
              inputType="password"
              error={errors.password?.message}
            />

            <ButtonStyled type="submit" title="Sign in" />
          </FormStyled>
        </div>
      )}
    </div>
  );
}
