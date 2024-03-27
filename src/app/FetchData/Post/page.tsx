

interface Post{
    userId:number;
    id:number;
    title:string;
    body:string;

}

const FetchPost =async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());

    return(
        <div>
            {
                data.map((post:Post)=>(
                    <div key={post.id}>
                         <h1>{post.userId}</h1>
                <p className="underline">Title</p>
                <h1>{post.title}</h1>
                <p className="underline"> Body</p>
                <h1>{post.body}</h1>
                <h1>hello</h1>
                <hr />
                   
                    </div>
                ))
            }
        </div>
    )
}

export default FetchPost;