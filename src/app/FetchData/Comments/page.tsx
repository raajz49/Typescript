import { comment } from "postcss";

interface Comments{
    id:number;
    name:string;
    body:string;
}

const FetchComments =async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/comments").then(res=>res.json())

    return(
        <div >
            {
                data.map((comment:Comments)=>(
                    <div key={comment.id} >
                          <p className='underline'>Comment {comment.id}</p>
              
                <p className='underline'>Name</p>
                <h1>{comment.name}</h1>

                <p className='underline'>Body</p>
                <h1>{comment.body}</h1>
                    </div>
                ))
            }
        </div>
    )

}

export default FetchComments;