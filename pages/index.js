import Link from "next/link";

export default function Index() {
  return (
    <>
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
