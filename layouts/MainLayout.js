import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title}) {
    return (
        <>
            <Head>
                <title> {title} </title>
                <meta name="keywords" content="mtg,magic the gathering" />
                <meta name="description" content="" />
                <meta charSet="utf-8" />
            </Head>

            <nav>
                <Link href={'/'}><a>Главная страница</a></Link>
                <Link href={'/league'}><a>Лига</a></Link>
                <Link href={'/records'}><a>Отчеты</a></Link>
                <Link href={'/legacy'}><a>Легаси</a></Link>
                <Link href={'/participate'}><a>Участвовать в проекте</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            nav a {
            color: black;
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            }
            `}</style>
        </>

    )
}