
"use client"
import SkeletonCard from "@/app/loading";
import { useEffect, useState} from "react";
import { TodoCard } from "./todoCard";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const FetchTodo = ({ params }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Todo[]>([]);

  const id = params.todoId;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      setData(await response.json());
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleDeleteTodo = async (todoId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: "DELETE"
      }
    );
    if (response.ok) {
      setData(data.filter(({todo}:any ) => todo.id !== todoId));
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-black font-serif mb-2 mt-20">
        Todo: {id}
      </h1>
      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((todo) => (
           <TodoCard key={todo.id} data={data}setData={setData} todo={todo} />
           
          ))}
          
        </div>
     
     )}

    </div>
  );
};

export default FetchTodo;
