"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SingleTodo({ item, id, type }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item);
  const [checked, setChecked] = useState(type);
  const handleDelete = async (todoId) => {
    try {
      const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        router.refresh();
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: editedTitle, type: checked }),
      });

      if (res.status === 200) {
        router.refresh();
        setIsEditing(false);
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(item);
  };
  const handleCheckboxChange = () => {
    setChecked((prevChecked) => (prevChecked === 1 ? 2 : 1));
  };
  return (
    <div className="flex justify-between bg-slate-100 text-slate-900 p-2 rounded-sm my-2 ">
      <div className="flex justify-center items-center gap-1">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span>{item}</span>
        )}
        <input
          type="checkbox"
          checked={checked === 2}
          onChange={handleCheckboxChange}
          disabled={!isEditing}
        />
      </div>
      <div className="flex gap-1">
        {isEditing ? (
          <>
            <button
              className="text-green-500 px-2 text-sm rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="text-gray-500 px-2 text-sm rounded-md"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="text-blue-500 px-2 text-sm rounded-md"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}

        <button
          className="text-red-500 px-2 text-sm rounded-md"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
