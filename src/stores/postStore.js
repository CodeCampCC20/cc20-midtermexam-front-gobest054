import axios from "axios";
import { create } from "zustand";



const usePostStore = create((set)=>({
  todos:[],
  setTodos:(todos)=>set(()=>{todos}),
  actionFetchAllPostByUserId: async (userId)=>{
    try {
    const res = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${userId}`)
    set({todos: res.data.todos});
    // console.log(res.data.todos)
    }catch(err){
      console.log(err)
    }
    
  },
}));
export default usePostStore;