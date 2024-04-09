/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
// const DiscordOauth2 = require("discord-oauth2");
import DiscordOauth2 from "discord-oauth2";

const oauth = new DiscordOauth2();

export const asyncGetUserInfo = async (access_token: string) => {
  oauth.getUser(access_token).then(console.log);
  oauth.getUserGuilds(access_token).then(console.log);

  return oauth.getUser(access_token);
};

export const fetchGenerateToken = async (code: string) => {
  const originUrl = window.location.origin;
  const response = await oauth.tokenRequest({
    clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
    code,
    scope: "identify email guilds",
    grantType: "authorization_code",

    redirectUri: `${originUrl}/check/discord`,
  });
  const { access_token, token_type } = response;
  // asyncGetUserInfo(access_token);
  return { access_token, token_type };
};

// const useDiscordAuth = (props: { code?: string }) => {
//   const asyncGenerateToken = async (code: string) => {
//     const originUrl = window.location.origin;
//     const response = await oauth.tokenRequest({
//       clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
//       code,
//       scope: "identify",
//       grantType: "authorization_code",

//       redirectUri: `${originUrl}/discord`,
//     });
//     const { access_token, token_type } = response;
//     return { access_token, token_type };
//   };

//   const asyncGetUserInfo = async (code?: string) => {
//     if (!code) return null;
//     const { access_token, token_type } = await asyncGenerateToken(code);
//     const response = await fetch("https://discord.com/api/users/@me", {
//       headers: {
//         authorization: `${token_type} ${access_token}`,
//       },
//     });
//     if (!response.ok) console.error("Failed to fetch user info");
//     return response.json();
//   };

//   const {
//     data: userInfo,
//     isLoading,
//     error,
//   } = useQuery(["code", props.code], () => asyncGetUserInfo(props.code));

//   return { userInfo, error, isLoading };
// };

// export default useDiscordAuth;
