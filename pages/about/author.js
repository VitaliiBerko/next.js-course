import { Router } from "next/router";

export default function Author() {
  return (
    <>
      <h1> Page Author </h1>
      <button onClick={() => Router.back()}>Go back to home</button>
    </>
  );
}
