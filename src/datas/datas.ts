import { IUploadOptions } from "../types/data";


export const uploadOptions:IUploadOptions[]=[
    {
        icon: "/icons/youtube.png",
        title:"Upload Youtube video",
        method:'youtube'
    },
    {
        icon:"/icons/spotify.png",
        title:"Upload Spotify Podcast",
        method:'spotify'

    },
    {
        icon:"/icons/rss.png",
        title:"Upload Media or Text File",
        method:'rss'

    },

]


export const iconSizeOptions = [{ label: 'Small (48 x 48 px)', val: '48' }, { label: 'Medium (64 x 64 px)', val: '64' }, { label: 'Large (96 x 96 px)', val: '96' }]
export const iconPositions = [
    { label: 'Top Left', val: 'top-left' },
    { label: 'Top Right', val: 'top-right' },
    { label: 'Bottom Left', val: 'bottom-left' },
    { label: 'Bottom Right', val: 'bottom-right' },
    { label: 'Center', val: 'center' },
    { label: 'Top Center', val: 'top-center' },
    { label: 'Bottom Center', val: 'bottom-center' },
    { label: 'Left Center', val: 'left-center' },
    { label: 'Right Center', val: 'right-center' },
  ];


