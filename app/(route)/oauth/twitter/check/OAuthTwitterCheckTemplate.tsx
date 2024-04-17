"use client";

import {
  twiiterUsernameAtom,
  twitterAccessCreatedAtom,
  twitterAccessTokenAtom,
  twitterExpiresInAtom,
  twitterRefreshTokenAtom,
  twitterUserIDAtom,
} from "@/app/_store";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UserV2 } from "twitter-api-v2";

const OAuthTwitterCheckTemplate = ({
  accessToken,
  refreshToken,
  expiresIn,
  userObject,
}: {
  accessToken: string;
  refreshToken: string | undefined;
  expiresIn: number;
  userObject: UserV2;
}) => {
  const router = useRouter();

  const setTwitterAccessToken = useSetAtom(twitterAccessTokenAtom);
  const setTwitterRefreshToken = useSetAtom(twitterRefreshTokenAtom);
  const setTwitterExpiresIn = useSetAtom(twitterExpiresInAtom);
  const setTwiiterAccessCreated = useSetAtom(twitterAccessCreatedAtom);
  const setTwitterUserID = useSetAtom(twitterUserIDAtom);
  const setTwitterUsername = useSetAtom(twiiterUsernameAtom);

  useMemo(() => {
    if (!accessToken || !refreshToken || !expiresIn || !userObject) return;
    setTwitterAccessToken(accessToken);
    setTwitterRefreshToken(refreshToken);
    setTwitterExpiresIn(expiresIn);
    setTwiiterAccessCreated(Date.now());
    setTwitterUserID(userObject.id);
    setTwitterUsername(userObject.username);
    router.push("/user");
  }, []);

  return (
    <div>
      <p>accessToken: {accessToken}</p>
      <p>refreshToken: {refreshToken}</p>
      <p>expiresIn: {expiresIn}</p>
      <p>userObject: {JSON.stringify(userObject)}</p>
    </div>
  );
};

export default OAuthTwitterCheckTemplate;
