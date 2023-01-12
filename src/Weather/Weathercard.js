import React, { useEffect, useState } from 'react'


const Weathercard = ({ myweather }) => {
    const [weatherstate , setWeatherstate] = useState("");


    const {

        temp, humidity, pressure, weathermood, name, speed, country, sunset,
    } = myweather;

    // converting seconds into time

    let sec = sunset;
    let date = new Date(sec*1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`


    useEffect (()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds" : setWeatherstate("wi-day-cloudy");
                break;

                 case "Smoke" : setWeatherstate("wi-smoke");
                 break;
                case "Haze" : setWeatherstate("wi-fog");
                break;

                case "Clear" : setWeatherstate("wi-day-sunny");
                break;



                default:
                    setWeatherstate('wi-day-sunny')
                    break;
            }
        }
    },[weathermood]);

    return (
        <>

            {/* four divided section */}

            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherstate}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name} , {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>


                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-sunset'}></i>
                            </p>
                            <p className='extra-info-leftside'>{timestr}<br /> sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-rain'}></i>
                            </p>
                            <p className='extra-info-leftside'>{pressure} <br /> Rain
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-humidity'}></i>
                            </p>
                            <p className='extra-info-leftside'>{humidity}
                                <br /> Humidity
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-strong-wind'}></i>
                            </p>
                            <p className='extra-info-leftside'>{speed}
                                <br /> wind
                            </p>
                        </div>
                    </div>


                </div>
            </article>




        </>
    )



}
export default Weathercard;
