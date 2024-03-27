

interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;

}

const FetchPost =async({params}:any)=>{
    const id= params.postId;
  const data=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res)=>res.json());

  return(
      <div>
         <h1 className="text-2xl text-red-600 font-serif mb-4 dark:text-white">
          Post User : {id}
            </h1>
          {
              data.map((post:Post)=>(
                  <div key={post.id}>
                       <h1>{post.id}</h1>
              <p className="underline">Title</p>
              <h1>{post.title}</h1>
              <p className="underline"> Body</p>
              <h1>{post.body}</h1>
              <h1>hello</h1>
              <hr className="border border-black mt-4" />
                 
                  </div>
              ))
          }
      </div>
  )
}

export default FetchPost;