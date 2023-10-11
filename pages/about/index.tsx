import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {


  return (

    <MainLayout title='About page'>
      <h1> About page </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptas.
      </p>
      <button onClick={()=>Router.push('/')}>Go back to home</button>
    </MainLayout>
  );
}
