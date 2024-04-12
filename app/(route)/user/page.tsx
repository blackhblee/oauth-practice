import { TwitterApi } from "twitter-api-v2";
import Link from "next/link";
import TwitterOAuthLink from "./_components/TwitterOAuthLink";

const UserPage = async () => {
  const TWITTER_CLIENT_ID = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID}`;
  const TWITTER_CLIENT_SECRET = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET}`;
  const client = new TwitterApi({
    clientId: TWITTER_CLIENT_ID,
    clientSecret: TWITTER_CLIENT_SECRET,
  });

  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    "http://localhost:9001/oauth/twitter",
    { scope: ["users.read", "tweet.read", "follows.read", "follows.write"] },
  );

  return (
    <main>
      <h1>User Page</h1>
      <div>
        <TwitterOAuthLink url={url} codeVerifier={codeVerifier} state={state} />
        <Link href="https://discord.com/oauth2/authorize?client_id=1224948994648838224&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9001%2Foauth%2Fdiscord&scope=identify+email+guilds">
          Discord
        </Link>
      </div>
    </main>
  );
};

export default UserPage;
