import styles from "./Post.module.css";

interface PostProps {
  postedAt: String;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function Post({ postedAt, body, author }: PostProps) {
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
    </div>
  );
}
