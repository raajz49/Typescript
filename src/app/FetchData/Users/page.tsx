'use client'

interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Users{
    id:number;
    name:string;
    email:string;
    address:Address;
}   

const FetchUser = async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json());

    return(
        <div>
            {
                data.map((user:Users)=>(
                    <div key={user.id}>
                          <p className='mb-2'><strong className=''>Name:</strong> {user.name}</p>
            <p className='mb-2'><strong className=''>Email:</strong> <span className='italic'>{user.email}</span></p>
            <p className='mb-2'><strong className=''>City:</strong> <span className=''>{user.address.city}</span></p>
            <hr className="border border-black mt-4" />
                    </div>
                ))
            }
        </div>
    )
}

export default FetchUser