"use client";

import { twitterUserIDAtom, twitterAccessTokenAtom } from "@/app/_store";
import { useAtomValue } from "jotai";
import Link from "next/link";

const TwitterFollowLink = () => {
  const twitterUserID = useAtomValue(twitterUserIDAtom);
  const twitterAccessToken = useAtomValue(twitterAccessTokenAtom);

  return (
    <Link
      className="underline"
      href={`/oauth/twitter/follow?userID=${twitterUserID}&accessToken=${twitterAccessToken}`}
      target="_blank"
    >
      Follow UncommonLab on Twitter
    </Link>
  );
};

export default TwitterFollowLink;
