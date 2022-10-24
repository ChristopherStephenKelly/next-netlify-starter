import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
        <Header title="Welcome to my app!" />
         <h1 className="title">
           Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      </main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    
    

      <Footer />
    </div>
  )
}
