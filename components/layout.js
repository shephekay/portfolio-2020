import Link from 'next/link'
import Head from 'next/head'

function Layout({ children }) {
    return(
        <>
        <Head>
            <title>Sheila Phedra Kelley</title>
            <link rel="icon" href="/favicon.svg" />
        </Head>

        <main>{children}</main>
        </>
    )
}

export default Layout