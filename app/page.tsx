import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/user">User</Link>
    </div>
  );
};

export default Home;
