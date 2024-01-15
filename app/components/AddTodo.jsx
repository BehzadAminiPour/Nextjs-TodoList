"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const router = useRouter();

  const [item, setItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      item,
      type:1,
    };
      const res = await fetch("https://hr-todo.sahda.ir/create/task/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (res.status === 201) {
      router.refresh();
    }
    setItem("");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center font-bold text-2xl mb-2">Todo List</h1>
        <label>Add new todo :</label>
        <input
          required
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          className="rounded-md text-stone-950 p-1 w-72"
        />
        <button className="rounded-md bg-green-600 p-1 w-72">Add</button>
      </div>
    </form>
  );
}

