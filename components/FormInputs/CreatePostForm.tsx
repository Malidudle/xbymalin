"use client";

import { useSession } from "next-auth/react";
import styles from "./CreatePostForm.module.css";
import { FormEvent, useState } from "react";

interface Props {
  placeHolder: string;
  label?: string;
}

const CreatePostForm = ({ placeHolder, label }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [posted, setPosted] = useState(false);
  const session = useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      content: inputValue,
    };

    const res = await fetch("/api/posts/create-post/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();

    setInputValue("");
    setPosted(true);
  };

  if (!session) {
    return <div></div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <textarea
          className={styles.input}
          placeholder={placeHolder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setPosted(false);
          }}
        />
      </div>
      <button className={styles.button} type="submit">
        Post
      </button>
      {posted ? <p>Posted!</p> : <></>}
    </form>
  );
};

export default CreatePostForm;
