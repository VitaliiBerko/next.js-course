import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
    <Head>
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <title>Next.js-course</title>
      <meta name="keywords" content="next, js, javascript, next.js, nextjs"></meta>
      <meta name="description" content="next, js, javascript, next.js, nextjs"></meta>
    </Head>
      <h1>Hello Next.js</h1>
      <p>
        <Link href='/about'>About</Link>
      </p>
      <p>
      <Link href='/posts'>Posts</Link>
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rerum
        mollitia? Rerum cupiditate inventore modi iusto pariatur vitae aliquid
        ipsa voluptatem quidem earum rem quis voluptate obcaecati quae atque
        autem, incidunt vel! Laborum beatae mollitia corrupti quam accusantium,
        consequatur quae nam, veniam veritatis quas inventore possimus
        temporibus cum, iure obcaecati aperiam. Soluta necessitatibus nostrum
        laborum.
      </p>
    </>
  );
}
