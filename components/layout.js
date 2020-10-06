import Link from 'next/link'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'



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

        <AppBar position="sticky">
            <Toolbar>
                
                <nav>
                    <Link href='/'>
                        <a className="class">Home</a>
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
                </nav>

            </Toolbar>
        </AppBar>
        <main>{children}</main>
        </>
    )
}

export default Layout