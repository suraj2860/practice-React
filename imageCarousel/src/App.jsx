import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const images = [
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13328200/pexels-photo-13328200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  const [img, setImg] = useState(images[0]);

  // const randomImage = () => {
  //   let randomNumber = Math.floor(Math.random() * 9);
  //   console.log(randomNumber)
  //   return images[randomNumber];
  // }

  // const changeImg = () => {
  //   let imgUrl = randomImage();
  //   setImg(imgUrl);
  // }

  const nextBtn = () => {
    let i = images.indexOf(img);
    if (i < images.length - 1) setImg(images[i + 1]);
  }

  const prevBtn = () => {
    let i = images.indexOf(img);
    if (i > 0) setImg(images[i - 1]);
  }

  return (
    <div class="relative h-screen">
      <button onClick={prevBtn} class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">
        &larr;
      </button>

      <img src={img} alt="Image" class="w-full h-full object-cover" />

      <button onClick={nextBtn} class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded">
        &rarr;
      </button>
    </div>
  )
}

export default App
