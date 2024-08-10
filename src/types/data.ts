export interface IUser{
    id:string,
    email:string,
    name:string
}

export interface IProject{
    id:string
    userMail:string
    name:string,
    episodes:number
    createdAt?:string
    updatedAt?:string
}

export interface IResponse<T>{
    success:boolean,
    data?:T,
    message?:string
 }


 export interface Ierror{
  status:number,
  data:{
      errors:{field?:string,message:string}[]
  }
}