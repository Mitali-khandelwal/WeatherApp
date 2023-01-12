import React, { useEffect, useState } from 'react';
import "./weatherstyle.css";
import Weathercard from './Weathercard';


const Temp = () => {
    const [searchvalue, setSearchValue] = useState("Jaipur");
    const[myweather, setmyweather] = useState({})
    const getweaterdata = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=2b55e6c556ae0e53349f6d4fb9ce6cf5`

            let res = await fetch(url);
            let data = await res.json();
            const { temp , humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myweatherinfo = {
                temp, humidity, pressure, weathermood, name, speed, 
                 country, sunset,
            };
            setmyweather(myweatherinfo);
            console.log(temp)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getweaterdata();
    }, []);


    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder='search'
                        autoFocus id='search'
                        className='searchTerm'
                        value={searchvalue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button className="searchButton" type='button' onClick={getweaterdata}>search</button>
                </div>
            </div>
        
        {/* four section division */}

        <Weathercard myweather = {myweather}/>
        </>
    )



}
export default Temp;