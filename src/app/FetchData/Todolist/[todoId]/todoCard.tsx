
import { useState } from "react";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export const TodoCard = ({ todo, data, setData }: { todo: Todo; data: Todo[]; setData: (data: Todo[]) => void  }) => {
    
   
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodoText, setEditedTodoText] = useState("");
  
    const handleDeleteTodo = async (todoId: number) => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`,
          {
            method: "DELETE"
          }
        );
        const result=confirm(`Are you sure you wanna delete Todo-${todoId}?`);
        if(result){
        if (response.ok) {
          setData(data.filter((todo) => todo.id !== todoId));
        }
      }
      };
  
    const handleEditTodo = (todoId: number ) => {
      setEditedTodoText(todo.title); 
      setIsEditing(true);
  
    
    };
    const handleSave = (todoId: number) => {
      const updatedData = [...data];
      todo.title = editedTodoText;
      const result=confirm(`Confirm update in Todo-${todoId}?`);
      if(result){
      setData(updatedData);
      setIsEditing(false); 
    };
  }
    const handleCompletedChange=(completed:boolean)=>{
        const updatedData = [...data];
        todo.completed=completed;
        setData(updatedData);
    }
    
    
    return  <div key={todo.id}>
    <div className="bg-gray-300 p-4 dark:text-black">
      <h1 className="underline font-serif font-bold text-2xl">
        Todo: {todo.id}
      </h1>
      <p className="underline font-bold font-sans">Title</p>
     
      {isEditing? ( 
        <div className="flex gap-2">
          <input
          
            type="text"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
           
          className="dark:bg-white w-2/3 " />
          <button onClick={() => handleSave(todo.id)}className="bg-blue-400 rounded">Save</button>
         
        </div>
      ) : (
        <h1 onClick={() => handleEditTodo(todo.id)} className="gap-2">{todo.title} </h1> // Click to edit
      )}

      <p className="underline font-bold font-sans">Completed</p>
      {/* <p>{todo.completed.toString()}</p> */}
      <div>
          <label>
            <input
              type="radio"
              className="form-radio text-blue-500"
              value="true"
              checked={todo.completed === true}
              onChange={() => handleCompletedChange(true)}
            />
            True
          </label>
          <br />
          <label>
            <input
              type="radio"
              className="form-radio text-blue-500 dark:bg-blue-700"
              value="false"
              checked={todo.completed === false}
              onChange={() => handleCompletedChange(false)}
             />
            False
          </label>
        </div>

      <button
        className="bg-red-800 hover:bg-red-400 rounded-md px-0.5"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  </div>
}