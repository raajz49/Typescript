'use client'

interface Album {
    userId: string;
    id: string;
    title: string;
}

const FetchAlbum = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums").then((res) => res.json());
    
    return (
        <div>
            {data.map((album: Album) => (
                <div key={album.id}>
                    <h2 className="text-lg font-semibold mb-2">{album.id}</h2>
                    <p>{album.title}</p>
                </div>
            ))}
        </div>
    );
}
export default FetchAlbum