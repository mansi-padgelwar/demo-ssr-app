import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Link
          href="https://demo-ssr-app-eta.vercel.app/en-us/halloween/app"
          legacyBehavior
        >
          <a>1. Halloween Page</a>
        </Link>
        <Link
          href="https://demo-ssr-app-eta.vercel.app/en-us/diwali/app"
          legacyBehavior
        >
          <a>2. Diwali Page</a>
        </Link>
      </div>
    </main>
  );
}
