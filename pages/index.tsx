import Head from 'next/head'
import MyCanvas from '../components/MyCanvas';
import Landing from '../2D/Landing';
import { Tooltips } from '../2D/Tooltips';
import { Modal } from '../2D/Modal';

export default function Home() {

  return (
    <div >
      <Head>
        <title>Lee Yuan Hooi</title>
        <meta name="description" content="Lee Yuan Hooi is a React Frontend Developer from Malaysia. Lee prioritizes optimized and performant products." />
        <link rel="icon" href="/LYH.svg" />
      </Head>

      <main >
        <MyCanvas />
        <Landing />
        <Tooltips />
        <Modal />
      </main>

    </div>
  )
}

// export async function getStaticProps() {
//   return { props: {} }
// }