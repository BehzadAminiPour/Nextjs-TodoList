export default function AddTodo() {
  return (
    <form className="mt-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center font-bold text-2xl mb-2">Todo List</h1>
        <label htmlFor="">Add new todo :</label>
        <input type="text" className="rounded-md text-stone-950 p-1 w-72" />
        <button className="rounded-md bg-green-600 p-1 w-72">Add</button>
      </div>
    </form>
  );
}
