import { TwitterApi } from "twitter-api-v2";
import UserTemplate from "./_components/UserTemplate";

const UserPage = async () => {
  const TWITTER_CLIENT_ID = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID}`;
  const TWITTER_CLIENT_SECRET = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET}`;
  const client = new TwitterApi({
    clientId: TWITTER_CLIENT_ID,
    clientSecret: TWITTER_CLIENT_SECRET,
  });

  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    `${process.env.NEXT_PUBLIC_ORIGINS}/oauth/twitter`,
    {
      scope: [
        "users.read",
        "tweet.read",
        "follows.read",
        "follows.write",
        "offline.access",
      ],
    },
  );

  return <UserTemplate url={url} codeVerifier={codeVerifier} state={state} />;
};

export default UserPage;
