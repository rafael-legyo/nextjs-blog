import Link from "next/link";
import fetch from "node-fetch";

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3333/lojas");
  const json = await res.json();

  return {
    props: {
      stars: json[0].user.email,
    },
  };
}

function Index({ stars }) {
  return (
    <div>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  );
}

export default Index;
