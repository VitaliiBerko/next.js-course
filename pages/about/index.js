import Router from "next/router";

export default function About() {


  return (

    <>
      <h1> Page About </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptas.
      </p>
      <button onClick={()=>Router.back()}>Go back to home</button>
    </>
  );
}
