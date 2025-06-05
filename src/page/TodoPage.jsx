import { React, useEffect, useState } from "react";
import useAuthStore from "../stores/authStore";
import usePostStore from "../stores/postStore";
import axios from "axios";

function TodoPage() {
  const [input, setInput] = useState("");

  const userId = useAuthStore((state) => state.userId);
  const actionFetchAllPostByUserId = usePostStore(
    (state) => state.actionFetchAllPostByUserId
  );
  const todos = usePostStore((state) => state.todos);
  const setTodos = usePostStore((state) => state.setTodos);
  // console.log(userId)

  const setUseState = (value) => {
    setInput(value);
  };

  useEffect(() => {
    actionFetchAllPostByUserId(userId);
  }, []);

  async function useAddTodoList(e) {
    e.preventDefault();

    const data = {
      taskName: input || "",
      userId: 31,
    };
    console.log(axios);

    await axios.post(
      "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos",
      data
    );
    actionFetchAllPostByUserId(userId);
    setInput("");
  }

  async function deleteApi(id) {
    await axios.delete(
      `http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/31`
    );
    actionFetchAllPostByUserId(userId);
  }

  console.log("todos", todos);
  return (
    <div className="min-h-screen bg-amber-300 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">My Todos</h1>

        <form onSubmit={useAddTodoList} className="mb-6 flex gap-2">
          <input
            type="text"
            className="flex-grow p-3 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="New task"
            value={input}
            onChange={(e) => setUseState(e.target.value)}
          />
        </form>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {todos.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="flex justify-between items-center bg-gray-800 rounded p-3"
            > <input type="checkbox" defaultChecked className="checkbox" />
              <h2 className="font-medium truncate">{item.taskName}</h2>
              <button
                className="btn btn-error bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-200">
                Edit
              </button>
              <button
                onClick={() => deleteApi(item.id)}
                className="btn btn-error bg-red-600 text-white px-3 py-1 rounded transition-colors duration-200">
                Delete
              </button>
               
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
