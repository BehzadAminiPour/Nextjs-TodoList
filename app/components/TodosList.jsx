import SingleTodo from "./SingleTodo";
async function getTodos() {
    const res = await fetch("https://hr-todo.sahda.ir/", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}



export default async function TodosList() {
  let todos = await getTodos();

  return (
    <div className="mt-14 px-2">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
