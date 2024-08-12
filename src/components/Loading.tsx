import { RingLoader } from "react-spinners"

function Loading() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-neutral-100/50 backdrop-blur-md">
      <RingLoader color="gray" size={80}   />
    </div>
  )
}

export default Loading
