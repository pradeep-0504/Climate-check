import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d1fd260a8c032d2224ad36fd6d5ab36a";

    let getWeatherData=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse=await response.json();
        // console.log(JsonResponse);
        let result={
            city:city,
            temp:JsonResponse.main.temp,
            tempMin:JsonResponse.main.temp_min,
            tempMax:JsonResponse.main.temp_max,
            humidity:JsonResponse.main.humidity,
            feels_like:JsonResponse.main.feels_like,
            weather:JsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw new Error("City not found in our API");
        }
    }

    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    
    let handleSubmit=async (e)=>{
        try{
            e.preventDefault();
        setCity("");
        console.log(city);
       let newInfo=await getWeatherData();
       updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    }
       

    return (
    <div className="search-box">

        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br />
        <br />
        <Button variant="contained" type="submit">Search</Button>
        </form>
        {error && <p>No such place exists in our API. Please try with a new city name</p>}

    </div>
    
)
}


