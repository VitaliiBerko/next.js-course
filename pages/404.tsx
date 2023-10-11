import Link from "next/link";
import css from '../styles/error.module.css'

export default function ErrorPage() {
    return(
        <>
        <h1 className={css.error}>Erro page</h1>
        <p>Please <Link href={'/'}> go back</Link> to safety page</p>
        </>
    )
}