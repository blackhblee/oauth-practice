import { redirect } from "next/navigation";
import { TwitterApi } from "twitter-api-v2";
import OAuthTwitterFollowTemplate from "./OAuthTwitterFollowTemplate";

const OAuthTwitterFollowPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  if (!searchParams?.userID || !searchParams?.accessToken) {
    redirect("/user");
  }

  const client = new TwitterApi(searchParams?.accessToken);
  await client.v2
    .follow(
      searchParams.userID,
      process.env.NEXT_PUBLIC_TWITTER_FOLLOW_ID as string,
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  return <OAuthTwitterFollowTemplate />;
};

export default OAuthTwitterFollowPage;
