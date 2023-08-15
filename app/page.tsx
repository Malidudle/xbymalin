import Feed from "@/components/Feed/Feed";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = "5";

export default async function Home() {
  const data = await prisma.posts.findMany();
  return (
    <>
      <div className={styles.text}>
        <h1>For You</h1>
        <Feed data={data} />
      </div>
    </>
  );
}
