
interface Photo{
        albumId:number;
        id:number;
        title:string;
        url:string;
        thumbnailUrl:string;
}
    
const FetchData = async({ params }:any) => {
  const  id  = params.photoId;
  const data= await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((res)=>res.json());
  return(
    <>
    <h1 className="text-2xl text-red-600 font-serif mb-4 dark:text-white">
          Photos - Album: {id}
            </h1>
     {data.map((photo:Photo,id:number)=>(
      <div key={id}>
      <p className="underline">Title</p>
      <h1>{photo.id}</h1>
      <h1>{photo.title}</h1>
      <img src={photo.thumbnailUrl} className="width-50" alt={photo.title} />
      <p className="underline">Body</p>
   <hr className="border border-black mt-4" />
    </div>
     ))} 
    </>
  )
  
}

export default FetchData