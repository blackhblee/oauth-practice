"use client";

import { useEffect } from "react";
import { UserV2FollowResult } from "twitter-api-v2";

const OAuthTwitterFollowTemplate = ({ res }: { res: UserV2FollowResult }) => {
  useEffect(() => {
    if (res.data.following) {
      window.close();
    }
  }, [res.data.following]);

  return (
    <div>
      <h1>Following...</h1>
    </div>
  );
};

export default OAuthTwitterFollowTemplate;
