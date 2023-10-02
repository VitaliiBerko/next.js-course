import Link from "next/link";

export default function ErrorPage() {
    return(
        <>
        <h1>Erro page</h1>
        <p>Please <Link href={'/'}> go back</Link> to safety page</p>
        </>
    )
}