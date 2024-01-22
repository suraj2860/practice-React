import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

  return (
    <div className='tet-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="github picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/suraj2860');
    return response.json();
}