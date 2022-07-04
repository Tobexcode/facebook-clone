import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/login'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { db } from '../firebase'
import SignIn from './auth/signin'
import { getSession } from "next-auth/react"

export default function Home({posts}) {
  console.log(posts)
  return (
    <div className="scrollbar-thin ">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex '>
      <Sidebar />
      {/* Feed */}
      <Feed posts={posts}/>
      
      <Widgets />
      </main>
    </div>
    
  )
}

export async function getServerSideProps(context) {
  
  console.log(context)

  const session = await getSession(context);
 
  const posts = await db.collection("posts").orderBy
  ("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

  return{ 
    props: {
      // session: await useSession(ctx),
      session,
      posts: docs
      
    }
  }
}


