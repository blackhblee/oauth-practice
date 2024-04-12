import { redirect } from "next/navigation";
import OAuthTwitterTemplate from "./_components/OAuthTwitterTemplate";

const OAuthTwitterPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  if (!searchParams?.code || !searchParams?.state) {
    redirect("/user");
  }

  return (
    <OAuthTwitterTemplate
      code={searchParams?.code}
      state={searchParams?.state}
    />
  );
};

export default OAuthTwitterPage;
