
import SingleTodo from "./SingleTodo";

async function getTodos() {
  try {
    const res = await fetch("https://hr-todo.sahda.ir/", {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data = await res.json();
    return data.uncompleted || []; 
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    return []; 
  }
}

export default async function TodosList() {
  try {
    let todos = await getTodos();
   

   
    if (Array.isArray(todos)) {
      return (
        <div className="mt-14 px-2">
          {todos.map((todo) => (
            <SingleTodo key={todo.id} {...todo} />
          ))}
        </div>
      );
    } else {
      console.error("Todos is not an array");
      return null; 
    }
  } catch (error) {
    console.error("Error in TodosList:", error.message);
    return null; 
  }
}