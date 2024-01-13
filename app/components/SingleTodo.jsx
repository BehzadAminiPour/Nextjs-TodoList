export default function SingleTodo() {
  return (
    <div className="flex justify-between bg-slate-100 text-slate-900 p-2 rounded-sm my-2 ">
      <p>exercise </p>
      <div className="flex gap-1">
        <button className="text-blue-500 px-2 text-sm rounded-md">Edit</button>
        <button className="text-red-500 px-2 text-sm rounded-md">Delete</button>
      </div>
    </div>
  );
}
