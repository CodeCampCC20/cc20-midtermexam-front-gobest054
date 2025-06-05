import { create } from "zustand"
import {persist} from "zustand/middleware"

const useAuthStore =create(persist((set)=>({
  user:null,
  setUser:()=>{},
  accessToken:"",
  userId:"31",
  actionLogin:(input)=>{},
  actionRegister: (input)=>{},
  actionGetme:()=>{}
})))
export default useAuthStore