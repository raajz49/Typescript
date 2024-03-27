

interface Comments{
    postId:number;
    id:number;
    name:string;
    body:string;
}

const FetchComments =async({params}:any)=>{
    const id=params.commentId;
    const data=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res=>res.json())

    return(
        <div>
            <h1>Post:{id}</h1>
            {
                data.map((comment:Comments)=>(
                    <div key={comment.id}>
                          <p className='underline'>Comment {comment.id}</p>
                <h1></h1>
                <p className='underline'>Name</p>
                <h1>{comment.name}</h1>

                <p className='underline'>Body</p>
                <h1>{comment.body}</h1>
                <hr className="border border-black mt-4" />
                    </div>
                ))
            }
        </div>
    )

}

export default FetchComments;