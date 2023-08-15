import styles from "./page.module.css";
import NotLoggedIn from "@/components/NotLoggedInUI/NotLoggedIn";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import FeedWithOptions from "@/components/Feed/FeedWithOptions/FeedWithOptions";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <NotLoggedIn />;
  }

  if (session.user.email) {
    const userPosts = await prisma.posts.findMany({
      where: {
        userID: session.user.email,
      },
    });
    return (
      <>
        <div className={styles.topLine}>
          <img
            className={styles.profilePicture}
            src={session.user?.image || ""}
            width={120}
            height={120}
            alt={`${session.user?.name!}'s profile pic `}
          />
          <h1 className={styles.userName}>{session.user?.name}</h1>
        </div>
        <FeedWithOptions data={userPosts} />
      </>
    );
  }
};

export default Profile;
