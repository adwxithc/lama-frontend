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

export interface IEpisode{
    id:string,
    projectId:string,
    name:string,
    description:string,
    createdAt:string,
    updatedAt:string,
    method:'youtube'|'spotify'| 'rss'
}

export interface IResponse<T>{
    success:boolean,
    data?:T,
    message?:string
 }

 export interface IPaginatedResponse<T>{
    success:boolean,
    data:{
        lastPage:number,
        totalPages:number,
        items:T[]
    },
    message?:string
 }


 export interface Ierror{
  status:number,
  data:{
      errors:{field?:string,message:string}[]
  }
}

export interface ICreateEpisode{
    name:string,
    description:string,
    projectId:string,
    method:'youtube'|'spotify'| 'rss'
}

export interface IUploadOptions{
    icon:string,
    title:string,
    method:'youtube'|'spotify'|'rss'
}