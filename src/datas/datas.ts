import { IUploadOptions } from "../types/data";


export const uploadOptions:IUploadOptions[]=[
    {
        icon: "/src/assets/icons/youtube.png",
        title:"Upload Youtube video",
        method:'youtube'
    },
    {
        icon:"/src/assets/icons/spotify.png",
        title:"Upload Spotify Podcast",
        method:'spotify'

    },
    {
        icon:"/src/assets/icons/rss.png",
        title:"Upload Media or Text File",
        method:'rss'

    },

]


