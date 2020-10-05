import Link from 'next/link'
import Head from 'next/head'

function Layout({ children }) {
    return(
        <>
        <Head>
            <title>Sheila Phedra Kelley</title>
            <link rel="icon" href="/favicon.svg" />
        </Head>

        <nav>
            <Link href='/'>
                <a className="class">Home</a>
            </Link>
            <Link href='about'>
                <a>About</a>
            </Link>
            <Link href='/portfolio'>
                <a>Portfolio</a>
            </Link>
            <Link href='/contact'>
                <a>Contact</a>
            </Link>
        </nav>

        <main>{children}</main>
        </>
    )
}

export default Layout