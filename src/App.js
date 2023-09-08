import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [data,setData] = useState({});
const [location,setLocatio] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fd5278380257bf8fadc4457280664ca8`;

const searchLocatiion = (event)=>{
    if(event.key === 'Enter')
    {
      axios.get(url).then(response=>
      {
        setData(response.data)
        console.log(response.data)
      })
      setLocatio('');
    }
}
 

  return (
    <div className="App">

    <div className='search'>
      <input 
      type='text'
       value={location}
        onChange={event=>setLocatio(event.target.value)}
        onKeyPress={searchLocatiion}
         placeholder='Enter City' >

      </input>
    </div>
     
      <div className='container'>

        <div className='topPortion'>

          <h1 className='name'>{data.name} </h1>
          <div className='degree'>
            {data.main? <h1>{data.main.temp}</h1>:null}
          
          </div>
          
          <div className='description'>
            {data.weather?  <p>{data.weather.description}</p>:null}
             {/* console.log(ata.weather.description); */}
          </div>

        </div>

        <div className='bottomPortion'>

          <div className='feels'>
            <p>feels like</p>
            {data.main? <h1>{data.main.temp}</h1>:null}
          
          </div>

          <div className='humidity'>
            <p>humidity</p>
            {data.main?<h1>{data.main.humidity} </h1>:null}
          
          
          </div>

          <div className='wind'>
          <p>wind </p>
          {
            data.wind? <h1>{data.wind.speed}</h1>:null
          }
         
          </div>

          <div className='tempMin'>
          <p>min temp </p>
          {
            data.main?<h1>{data.main.temp_min}</h1>:null
          }
         
          </div>

          <div className='tempMax'>
          <p>min temp </p>
          {
            data.main?<h1>{data.main.temp_max}</h1>:null
          }
         
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
