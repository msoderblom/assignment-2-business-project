import React, { useState } from "react";
import FormRegister from "../components/FormRegister";

export default function RegisterPage() {
  const [hasRegistered, setHasRegistered] = useState(false);

  return (
    <div>
      {hasRegistered ? (
        <div>
          <h3>Your account is almost registered!</h3>
          <p>
            You have been sent an email. Click the link in the email to activate
            your account.
          </p>
        </div>
      ) : (
        <FormRegister setHasRegistered={setHasRegistered}></FormRegister>
      )}
    </div>
  );
}
