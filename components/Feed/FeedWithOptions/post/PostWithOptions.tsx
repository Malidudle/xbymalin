"use client";

import styles from "./Post.module.css";
import { useRouter } from "next/router";

interface PostProps {
  id: string;
  postedAt: String;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function PostWithOptions({ id, postedAt, body, author }: PostProps) {
  const router = useRouter();

  const handleDeletePost = async (post: PostProps): Promise<void> => {
    router.push(`/posts/deletepost?id=${post.id}`);
  };
  
  return (
    <div className={styles.comment}>
      <div className={styles.firstline}>
        <img src={author.image} alt={author.name} className={styles.image} />
        <div>
          <p className={styles.userName}>{author.name}</p>
          <p className={styles.postedAt}>{postedAt}</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{body}</div>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={() => handleDeletePost}>Delete</button>
      </div>
    </div>
  );
}
