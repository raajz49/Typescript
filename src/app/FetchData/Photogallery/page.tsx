'use client'

interface Photo{
        albumId:number;
        id:number;
        title:string;
        url:string;
        thumbnailUrl:string;
}
    // async function getData(albumId:number){
    //     const res=await `);
    //       return res.json();
    //   }

const fetchDataPage = async() => {
  const data= await fetch(`https://jsonplaceholder.typicode.com/photos`).then((res)=>res.json());
  return(
    <>
     {data.map((photo:Photo,id:number)=>(
      <div key={id}>
      <p className="underline">Title</p>
      <h1>{photo.title}</h1>
      <img src={photo.thumbnailUrl} className="width-50" alt={photo.title} />
      <p className="underline">Body</p>
      <hr />
    </div>
     ))} 
     <h1>hello</h1>
    </>
  )
  
}

export default fetchDataPage;