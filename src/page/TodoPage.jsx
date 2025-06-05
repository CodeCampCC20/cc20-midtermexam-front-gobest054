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
  e.preventDefault()
console.log(e);
const data = {
  "taskName": input || '',
  "userId": 31
}
await axios.post('http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos',data)
actionFetchAllPostByUserId(userId)
setInput("")
}

async function deleteApi(id){
  await axios.delete(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/31`);
  actionFetchAllPostByUserId(userId)
}



  console.log("todos", todos)
  return (
    <div className="p-8">
      <div className="w-2/5 border rounded-3xl p-8 mx-auto">
        <h1 className="text-2xl mb-4 flex justify-between">My Todos</h1>
        <div className="mb-4 flex">
          <form onSubmit={useAddTodoList}>
            <button type="submit"></button>
            <label className="input">
              <input
                className="flex-grow px-3 py-2 border rounded-1-1g focus:outline-none focus:ring-2 focus:right-blue-500"
                placeholder="new task"
                value={input}
                onChange={(e) => setUseState(e.target.value)}
              ></input>
            </label>
          </form>
        </div>
        <div>
          {todos.map((item) => (
            <div key={item.id} id={item.id}>
              <h1 className="input input-neutral " >{item.taskName}</h1>
              <button onClick={()=>deleteApi(item.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
