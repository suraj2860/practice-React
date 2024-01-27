import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [msg, setMsg] = useState('');
  const [display, setDisplay] = useState('hidden')
  const [errorDisplay, setErrorDisplay] = useState('hidden')
  const [error, setError] = useState('');


  const getBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      let error= '';
      if(isNaN(height)) {
        setErrorDisplay('block');
        setError('Please enter a valid height');
        setDisplay('hidden')
      }
      else if(isNaN(weight))
      {
        setErrorDisplay('block');
        setError('Please enter a valid weight');
        setDisplay('hidden')
      }
      else {
        const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      let message = '';

      if (bmiValue < 18.5) message = "Underweight";
      else if (bmiValue >= 18.5 && bmiValue < 25) message = "Normal";
      else if (bmiValue >= 25 && bmiValue < 30) message = "Overweight";
      else message = "Obese";

      setMsg(message);
      setDisplay('block');
      setErrorDisplay('hidden')
      }
    }
    else {
      setBmi('');
      setMsg('');
    }
  }

  return (
    <>
      <div class="h-screen flex">
        <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
          <div
            class=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          >

          </div>
          <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 class="text-white font-bold text-4xl font-sans">BMI</h1>
            <p class="text-white mt-1">BMI stands for Body Mass Index, and it is a measure of body fat based on a person's weight and height. It is commonly used as a quick and simple way to assess whether a person has a healthy body weight for a given height.</p>
            <p class="text-white mt-1">Here are the general BMI categories and their corresponding ranges:
            </p>
            <ul>
              <li class="text-white mt-1">Underweight: BMI less than 18.5</li>
              <li class="text-white mt-1">Normal weight: BMI between 18.5 and 24.9</li>
              <li class="text-white mt-1">Overweight: BMI between 25 and 29.9</li>
              <li class="text-white mt-1">Obese: BMI greater than 30</li>
            </ul>
            <p class="text-white mt-1"><b>Note</b> : While BMI is a useful screening tool, it does not directly assess body fat percentage, and it may not be accurate for athletes or individuals with high muscle mass. Other factors, such as age, gender, and distribution of fat, also play a role in assessing overall health. It is always advisable to consult with a healthcare professional for a comprehensive evaluation of your health and weight status.</p>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8 ">
          <div class="w-full px-8 md:px-32 lg:px-24">
            <form class="bg-white rounded-md shadow-2xl p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">BMI Calculator</h1>
              <br />
              <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input id="height" class=" pl-2 w-full outline-none border-none" type="text" name="height" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <input class="pl-2 w-full outline-none border-none" type="text" name="weight" id="weight" placeholder="Weight in Kg" value={weight} onChange={(e) => setWeight(e.target.value)} />

              </div>
              <button onClick={(e) => getBmi(e)} class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Calculate</button>

              <div class={`${display} block w-full bg-gray-300 mt-5 py-5 rounded-2xl text-center`}>
                <h2 class="px-2"><b>BMI : </b>{bmi} ( {msg} )</h2>
              </div>
              <div class={`${errorDisplay} block w-full bg-gray-300 mt-5 py-5 rounded-2xl text-center text-red-600`}>
                <h2 class="px-2">{error}</h2>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
