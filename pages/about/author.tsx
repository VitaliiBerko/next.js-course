import  Router  from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function Author() {
  return (
    <MainLayout>
      <h1> Page Author </h1>
      <button onClick={() => Router.back()}>Go back to home</button>
    </MainLayout>
  );
}
