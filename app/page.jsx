import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";


export default function Home() {
  return <>
  <main className="max-w-5xl mx-auto">
    <AddTodo/>
    <TodosList/>
  </main>
  </>;
}
