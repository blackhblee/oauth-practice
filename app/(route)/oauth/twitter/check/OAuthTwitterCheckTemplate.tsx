const OAuthTwitterCheckTemplate = ({ userObject }: { userObject: any }) => {
  return (
    <div>
      <h1>hi!</h1>
      <div>{JSON.stringify(userObject)}</div>
    </div>
  );
};

export default OAuthTwitterCheckTemplate;
