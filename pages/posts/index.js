import  Router from "next/router";

export default function Posts() {
  return (
    <>
      <h1>Posts Page</h1>
      <button onClick={() => Router.back()}>Go back to home</button>
    </>
  );
}
