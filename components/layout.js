import Link from 'next/link'
import Head from 'next/head'

function Layout({ children }) {

    return(
        <>
        <Head>
            <title>Sheila Phedra Kelley</title>
            <link rel="icon" href="/favicon.svg" />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>

                <nav className="nav">
                    <div className="left">
                        <Link href='/'>
                            <a> 
                                {/* <img src="/favicon.svg"/> */}
                                Sheila Kelley 
                                
                            </a>
                        </Link>
                    </div>

                    <div className="right">
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='about'>
                            <a>About</a>
                        </Link>
                        <Link href='/projects'>
                            <a>Projects</a>
                        </Link>
                        <Link href='/contact'>
                            <a>Contact</a>
                        </Link>
                    </div>
                </nav>

            
        <main>{children}</main>
        </>
    )
}

export default Layout