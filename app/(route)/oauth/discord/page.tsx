import { redirect } from "next/navigation";
import OAuthDiscordTemplate from "./_components/OAuthDiscordTemplate";

const OAuthDiscordPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  if (!searchParams?.code) {
    redirect("/user");
  }

  return <OAuthDiscordTemplate code={searchParams.code} />;
};

export default OAuthDiscordPage;
