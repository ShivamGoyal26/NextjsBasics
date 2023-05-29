import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Files
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user?.name) {
    return {
      title: "User not found",
    };
  }

  return {
    title: user.name,
    description: `This is description of ${user.name}`,
  };
};

const userDetail = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;

  if (!user?.name) {
    return notFound();
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
};

export default userDetail;
