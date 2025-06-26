import { useParams } from "react-router-dom"

export const User = () => {

const {userid} = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl px-4 text-center">User: {userid}  </div>
  )
}
