"use client";

import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { twitterCodeVerifierAtom, twitterStateAtom } from "@/app/_store";

const OAuthTwitterTemplate = ({
  code,
  state,
}: {
  code: string;
  state: string;
}) => {
  const router = useRouter();
  const codeVerifier = useAtomValue(twitterCodeVerifierAtom);
  const stateVerifier = useAtomValue(twitterStateAtom);

  useEffect(() => {
    if (code && state && codeVerifier && stateVerifier) {
      router.push(
        `/oauth/twitter/check?code=${code}&state=${state}&codeVerifier=${codeVerifier.replaceAll(
          '"',
          "",
        )}&stateVerifier=${stateVerifier.replaceAll('"', "")}`,
      );
    }
  }, [codeVerifier, stateVerifier]);
  return <div>...</div>;
};

export default OAuthTwitterTemplate;
