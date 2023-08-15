import { PostWithOptions } from "./post/PostWithOptions";
import { differenceInDays, differenceInHours, differenceInMinutes, } from "date-fns";

interface PostData {
  id: number;
  userID: string;
  name: string;
  userImage: string;
  datePosted: Date;
  content: string;
}

interface Props {
  data: PostData[];
}

const FeedWithOptions = ({ data: posts }: Props) => {
  posts.reverse();


  const formatDate = (date: Date) => {
    const now = new Date();
    const minutesDiff = differenceInMinutes(now, date);
    if (minutesDiff < 1) {
      return 'Just now';
    } else if (minutesDiff < 60) {
      return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
    }

    const hoursDiff = differenceInHours(now, date);
    if (hoursDiff < 24) {
      return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
    }

    const daysDiff = differenceInDays(now, date);
    return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
  };

  try {
    return (
      <div>
        {posts.map((post) => [
          <PostWithOptions
            id={String(post.id)}
            author={{
              name: post.name,
              image: post.userImage,
            }}
            body={post.content}
            postedAt={formatDate(post.datePosted)}
            key={String(post.datePosted)}
          />,
        ])}
      </div>
    );
  } catch {
    return <h1>Failed to fetch posts</h1>;
  }
};

export default FeedWithOptions;
