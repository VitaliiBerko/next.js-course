import Head from "next/head";
import Link from "next/link";

export function MainLayout ({children, title='Next.js App'}) {
    return (
        <>
        <Head>
            <title>{title} | Next Course</title>
        </Head>
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/posts'}>Posts</Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>
            {`
            nav {
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background: green;
                display: flex;
                justify-content: space-around;
                align-items: center;

            }
            nav a {
                color: #ffff;
            }
            main {
                margin-top: 60px;
                padding: 1rem
            }
            `
            
            }
        </style>
        </>
    )
}