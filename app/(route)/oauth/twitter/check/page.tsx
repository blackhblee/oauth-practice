import { redirect } from "next/navigation";
import { TwitterApi } from "twitter-api-v2";
import OAuthTwitterCheckTemplate from "./OAuthTwitterCheckTemplate";

const OAuthTwitterCheckPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  if (
    !searchParams?.code ||
    !searchParams?.state ||
    !searchParams?.codeVerifier ||
    !searchParams?.stateVerifier
  ) {
    redirect("/user");
  }
  const TWITTER_CLIENT_ID = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID}`;
  const TWITTER_CLIENT_SECRET = `${process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET}`;
  const client = new TwitterApi({
    clientId: TWITTER_CLIENT_ID,
    clientSecret: TWITTER_CLIENT_SECRET,
  });
  const {
    client: loggedClient,
    accessToken,
    refreshToken,
    expiresIn,
  } = await client.loginWithOAuth2({
    code: searchParams?.code,
    codeVerifier: searchParams?.codeVerifier,
    redirectUri: `${process.env.NEXT_PUBLIC_ORIGINS}/oauth/twitter`,
  });
  const { data: userObject } = await loggedClient.v2.me();

  return (
    <OAuthTwitterCheckTemplate
      accessToken={accessToken}
      refreshToken={refreshToken}
      expiresIn={expiresIn}
      userObject={userObject}
    />
  );
};

export default OAuthTwitterCheckPage;
