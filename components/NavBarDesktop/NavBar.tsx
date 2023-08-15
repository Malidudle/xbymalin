"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import {
  IconBellRinging,
  IconLogout,
  IconBrandTwitterFilled,
  IconSettings,
  IconNews,
  IconUser,
  IconInfoSquareRounded,
  IconPencilPlus,
  IconLogin,
} from "@tabler/icons-react";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const data = [
  { link: "/", label: "Feed", icon: IconBellRinging },
  { link: "/news", label: "News", icon: IconNews },
  { link: "/create-post", label: " Create Post", icon: IconPencilPlus },
  { link: "/profile", label: "Profile", icon: IconUser },
  { link: "/about-us", label: "About us", icon: IconInfoSquareRounded },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState("");
  const { data: session, status } = useSession();

  const links = data.map((item) => (
    <Link
      className={item.label === active ? styles.linkActive : styles.link}
      href={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon
        className={styles.linkIcon}
        stroke={1.5}
        width={25}
        height={25}
        color={item.label === active ? "black" : "white"}
      />
      <span className={styles.spanId}>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <IconBrandTwitterFilled
          className={styles.linkIcon}
          stroke={1.5}
          width={25}
          height={25}
        />
        <span className={styles.version}>Twitter</span>
      </div>

      {links}

      <div className={styles.footer}>
        {status === "loading" ? (
          <div className={styles.link}>...</div>
        ) : (
          <div
            className={styles.link}
            onClick={session ? () => signOut() : () => signIn()}
          >
            {session ? (
              <IconLogout
                className={styles.linkIcon}
                stroke={1.5}
                width={25}
                height={25}
              />
            ) : (
              <IconLogin
                className={styles.linkIcon}
                stroke={1.5}
                width={25}
                height={25}
              />
            )}
            <span className={styles.spanId}>
              {status === "authenticated" ? "Logout" : "Log in"}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
