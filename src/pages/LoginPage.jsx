import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormStyledInput from "../components/FormStyledInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import UserKit from "../data/UserKit";
import HeadingPage from "../atoms/HeadingPage";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

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
    console.log(data);
    const loginEmail = data.email;
    const loginPassword = data.password;

    userKit.login(loginEmail, loginPassword).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          userKit.setToken(data.token);
          history.push("/home");
        });
      } else {
        console.log("fel inlogg");
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
          <button onClick={handleActivateUser}>Activate User</button>
        </div>
      ) : (
        <div>
          <HeadingPage>Login</HeadingPage>
          <form onSubmit={handleSubmit(handleLogin)}>
            <p> {errors.credentials?.message}</p>

            <FormStyledInput
              label="Email"
              name="email"
              placeholder="name@email.com"
              register={register}
              inputType="email"
            />
            <FormStyledInput
              label="Password"
              name="password"
              register={register}
              inputType="password"
            />

            <button type="submit">Sign in</button>
          </form>
        </div>
      )}
    </div>
  );
}
