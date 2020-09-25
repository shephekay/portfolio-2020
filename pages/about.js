import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function About () {
    return (
        <Layout>
        <div className='about'>
            
            title="About Sheila Kelley"
            description={<div>
                <p>Creative, analytical, and attentive full-stack software engineer inspired by the range of possibilities in software development, and driven to create software projects centered on ease of use and engagement capability. To all products and projects, I bring an enthusiasm for development, a focus on readability, intuitive functionality, and beautiful design, and a keen analytical approach to problem-solving. </p>
                <p>In 2020, I graduated from General Assembly's Software Engineering Immersive Remote program. I also hold a BA in English with a concentration in Media, Rhetorical, and Cultural Studies and a minor in Political Science from the University of Illinois at Chicago. With seven years of experience in the food service industry as a barista, server, and cook, I can easily anticipate the needs and expectations of others, and organize and prioritize goals with respect to time management.</p>
                <p>Since 2018, I have served on the judging panel of the <a href=" https://www.portlandunknown.com/">Portland Unknown Film Festival</a>, a local independent film festival that screens every October at Disjecta Contemporary Art Center. </p>
                </div>} 
        </div>
        </Layout>
    )
}