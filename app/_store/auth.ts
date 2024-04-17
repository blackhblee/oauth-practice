import { atomWithStorage } from "jotai/utils";

export const twitterCodeVerifierAtom = atomWithStorage<string | null>(
  "twitterCodeVerifier",
  null,
);
export const twitterStateAtom = atomWithStorage<string | null>(
  "twitterState",
  null,
);
export const twitterAccessTokenAtom = atomWithStorage<string | null>(
  "twitterAccessToken",
  null,
);
export const twitterRefreshTokenAtom = atomWithStorage<string | null>(
  "twitterRefreshToken",
  null,
);
export const twitterExpiresInAtom = atomWithStorage<number | null>(
  "twitterExpiresIn",
  null,
);
export const twitterAccessCreatedAtom = atomWithStorage<number | null>(
  "twitterAccessCreated",
  null,
);

export const twitterUserIDAtom = atomWithStorage<string | null>(
  "twitterUserID",
  null,
);
export const twiiterUsernameAtom = atomWithStorage<string | null>(
  "twiiterUsername",
  null,
);
