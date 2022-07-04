import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post.js';


function Posts({ posts }) {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );

    return (
        <div>
            {
            realtimePosts ?    
            realtimePosts?.docs.map((post) => (
                <Post 
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                Image={post.data().image}
                postImage={post.data().postImage}
            />
            )) 
            : (
                posts.map((post) => (                    
                <Post 
                key={post.id}
                name={post.name}
                message={post.message}
                email={post.email}
                timestamp={post.timestamp}
                Image={post.image}
                postImage={post.postImage}
            />
                ))
            )
            }
        </div>
    );
}

export default Posts