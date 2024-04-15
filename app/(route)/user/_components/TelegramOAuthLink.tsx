"use client";

import { LoginButton } from "@telegram-auth/react";

const TelegramOAuthLink = () => {
  return (
    <LoginButton
      botUsername="OAuthPracticeBot"
      onAuthCallback={(data) => {
        console.log(data);
      }}
    />
  );
};

export default TelegramOAuthLink;
