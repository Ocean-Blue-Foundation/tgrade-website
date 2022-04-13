import React, { useState } from "react";
import { ContactForm, EmailInput, SubscribeButton, SubscribeContainer } from "./style";
import Alert from "../Alert";

export const hubspotFormGuid = "b0fe5d56-f113-4eaf-aab7-c3cdf9fb6e83";
export const hubspotPortalId = "7566149";
export const hubspotURL = "https://api.hsforms.com/submissions/v3/integration/submit/";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSuccessNotificationOpen, setSuccessNotificationOpen] = useState(false);
  const [isErrorNotificationOpen, setErrorNotificationOpen] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;
    const formResponse = await submitForm(email);
    if (formResponse.status === 200) {
      setEmail("");
      return setSuccessNotificationOpen(true);
    } else {
      return setErrorNotificationOpen(true);
    }
  };

  const submitForm = async (email: string) => {
    const response = await fetch(`${hubspotURL}${hubspotPortalId}/${hubspotFormGuid}`, {
      method: "post",
      body: JSON.stringify({
        hubspotPortalId,
        hubspotFormGuid,
        fields: [
          { name: "email", value: email },
          { name: "tgrade_general", value: true },
        ],
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response;
    });

    return response;
  };

  return (
    <SubscribeContainer id="subscribe">
      <ContactForm onSubmit={handleSubmit}>
        <EmailInput
          name="email"
          placeholder="Enter your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></EmailInput>
        <SubscribeButton>Submit</SubscribeButton>
      </ContactForm>
      {isSuccessNotificationOpen && (
        <Alert
          title="Successfully Subscribed"
          message="Thanks. Please check your inbox"
          close={() => setSuccessNotificationOpen(false)}
        />
      )}
      {isErrorNotificationOpen && (
        <Alert
          title="Something went wrong"
          message="Something went wrong. Please try again"
          close={() => setErrorNotificationOpen(false)}
        />
      )}
    </SubscribeContainer>
  );
};

export default Subscribe;
