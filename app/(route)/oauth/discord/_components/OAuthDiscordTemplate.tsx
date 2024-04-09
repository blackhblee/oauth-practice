/* eslint-disable @typescript-eslint/naming-convention */

"use client";

import { useEffect, useState } from "react";
import DiscordOauth2 from "discord-oauth2";

const oauth = new DiscordOauth2();

const OAuthDiscordTemplate = ({ code }: { code: string }) => {
  const [user, setUser] = useState<DiscordOauth2.User | undefined>();
  const handleOAuthUser = async () => {
    try {
      const originUrl = window.location.origin;
      const response = await oauth.tokenRequest({
        clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
        code,
        scope: "identify email guilds",
        grantType: "authorization_code",

        redirectUri: `${originUrl}/oauth/discord`,
      });
      const { access_token } = response;
      setUser(await oauth.getUser(access_token));
      oauth.getUser(access_token).then((res) => {
        if (res) setUser(res);
      });
      oauth.getUserGuilds(access_token).then(console.log);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleOAuthUser();
  }, []);

  useEffect(() => {
    if (user) console.log(user);
  }, [user]);

  // TODO: ssr로 변경할 수 있을지 확인

  return (
    <div>
      <h1>hi~</h1>
      {user && <div className="w-full">{JSON.stringify(user.email)}</div>}
    </div>
  );
};

export default OAuthDiscordTemplate;
