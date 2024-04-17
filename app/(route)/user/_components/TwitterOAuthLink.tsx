"use client";

import { twitterCodeVerifierAtom, twitterStateAtom } from "@/app/_store";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useEffect } from "react";

const TwitterOAuthLink = ({
  url,
  codeVerifier,
  state,
}: {
  url: string;
  codeVerifier: string;
  state: string;
}) => {
  const setCodeVerifier = useSetAtom(twitterCodeVerifierAtom);
  const setState = useSetAtom(twitterStateAtom);

  useEffect(() => {
    if (codeVerifier && state) {
      setCodeVerifier(codeVerifier);
      setState(state);
    }
  }, [codeVerifier, state]);

  return (
    <Link className="underline" href={url}>
      Connect to Twitter
    </Link>
  );
};

export default TwitterOAuthLink;
