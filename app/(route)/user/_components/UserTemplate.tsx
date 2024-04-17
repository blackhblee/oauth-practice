"use client";

import Link from "next/link";
import { useAtomValue, useSetAtom } from "jotai";
import {
  twiiterUsernameAtom,
  twitterAccessCreatedAtom,
  twitterAccessTokenAtom,
  twitterExpiresInAtom,
  twitterRefreshTokenAtom,
  twitterUserIDAtom,
} from "@/app/_store";
import { RESET } from "jotai/utils";
import TwitterFollowLink from "./TwitterFollowLink";
import TwitterOAuthLink from "./TwitterOAuthLink";
import TelegramOAuthLink from "./TelegramOAuthLink";

const UserTemplate = ({
  url,
  codeVerifier,
  state,
}: {
  url: string;
  codeVerifier: string;
  state: string;
}) => {
  const twitterAccessToken = useAtomValue(twitterAccessTokenAtom);

  const setTwitterAccessToken = useSetAtom(twitterAccessTokenAtom);
  const setTwitterRefreshToken = useSetAtom(twitterRefreshTokenAtom);
  const setTwitterExpiresIn = useSetAtom(twitterExpiresInAtom);
  const setTwiiterAccessCreated = useSetAtom(twitterAccessCreatedAtom);
  const setTwitterUserID = useSetAtom(twitterUserIDAtom);
  const setTwitterUsername = useSetAtom(twiiterUsernameAtom);

  const handleTwitterDisconnect = () => {
    setTwitterAccessToken(RESET);
    setTwitterRefreshToken(RESET);
    setTwitterExpiresIn(RESET);
    setTwiiterAccessCreated(RESET);
    setTwitterUserID(RESET);
    setTwitterUsername(RESET);
  };

  return (
    <main className="p-3">
      <h1 className="mb-2 text-lg font-semibold">User Page</h1>
      <div className="flex flex-col">
        <div className="my-1">Twitter</div>
        {twitterAccessToken ? (
          <>
            <TwitterFollowLink />
            <button
              className="mr-auto inline-block underline"
              type="button"
              onClick={handleTwitterDisconnect}
            >
              disconnect
            </button>
          </>
        ) : (
          <TwitterOAuthLink
            url={url}
            codeVerifier={codeVerifier}
            state={state}
          />
        )}

        <div className="my-1">Discord</div>
        <Link
          className="underline"
          href={`https://discord.com/oauth2/authorize?client_id=1224948994648838224&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_ORIGINS_URL}%2Foauth%2Fdiscord&scope=identify+email+guilds`}
        >
          Connect to Discord
        </Link>
        <div className="my-1">Telegram</div>
        <TelegramOAuthLink />
      </div>
    </main>
  );
};
export default UserTemplate;
