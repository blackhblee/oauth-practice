import { atomWithStorage } from "jotai/utils";

export const twitterCodeVerifierAtom = atomWithStorage<string | null>(
  "twitterCodeVerifier",
  null,
);
export const twitterStateAtom = atomWithStorage<string | null>(
  "twitterState",
  null,
);
