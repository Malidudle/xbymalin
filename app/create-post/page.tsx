import CreatePostForm from "@/components/FormInputs/CreatePostForm";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NotLoggedIn from "@/components/NotLoggedInUI/NotLoggedIn";

const CreatePost = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <NotLoggedIn />;
  }

  return (
    <div>
      <h1>Create A Post</h1>
      <CreatePostForm placeHolder="Share your thoughts..." />
    </div>
  );
};

export default CreatePost;
