import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <p>
        <Link href={"/about"}>To about page</Link>
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}
