
import { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';


export const Github = () => {
  const data = useLoaderData(); //this is for loader.
  //This code for normal.
  // const [data, setData] = useState([])
  //   useEffect(() => {

  //       fetch('https://api.github.com/users/koustavshee95')
  //       .then(response => response.json()).then(data => {
  //           setData(data);
  //       })
 
        
  //   }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
      <img src={data.avatar_url}  alt='Git picture' width={300} />
    </div>
  )
};

//This code created for loader
export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/koustavshee95');
  return response.json()
}
