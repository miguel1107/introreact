import Post from "./Post";


const initialState = [];

function PostList({posts,search}) {
    
    
    return (
        <div className="row">
            { posts===initialState?'Loading..':
            posts
            .filter((item) => item.text.includes(search))
            .map((item,i)=> (
                <Post 
                    key={i}     
                    createdAt={item.createdAt} 
                    autor={item.author.username} 
                    text={item.text}                     
                    image={item.image} 
                    likes={item.likes} 
                    id={item.id}
                />
            ))}
        </div>
    )
}


export default PostList;