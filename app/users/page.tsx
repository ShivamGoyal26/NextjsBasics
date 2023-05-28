import { getAllUsers } from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}></p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
};

export default Users;
