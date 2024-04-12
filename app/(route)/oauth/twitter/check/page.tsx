import { redirect } from "next/navigation";
import { TwitterApi } from "twitter-api-v2";
import OAuthTwitterCheckTemplate from "./OAuthTwitterCheckTemplate";

const OAuthTwitterCheckPage = ({
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
  const userObject = client
    .loginWithOAuth2({
      code: searchParams?.code,
      codeVerifier: searchParams?.codeVerifier,
      redirectUri: "http://localhost:9001/oauth/twitter",
    })
    .then(
      async ({
        client: loggedClient,
        // accessToken,
        // refreshToken,
        // expiresIn,
      }) => {
        // {loggedClient} is an authenticated client in behalf of some user
        // Store {accessToken} somewhere, it will be valid until {expiresIn} is hit.
        // If you want to refresh your token later, store {refreshToken} (it is present if 'offline.access' has been given as scope)

        // Example request
        const { data } = await loggedClient.v2.me();
        console.log(data);
        return data;

        // const { data: userObject } = await loggedClient.currentUserV2();
        // const followersList = await client.v2.followers(userObject.id);

        // console.log(userObject);
        // console.log(followersList);
        // console.log(userFollowers);

        // 이후에는 userObject를 가지고 소셜 유저 등록 처리를 진행
      },
    )
    .catch((err) => {
      console.error(err);
      return { not: "found" };
    });

  return <div>{JSON.stringify(userObject)}</div>;
};

export default OAuthTwitterCheckPage;
