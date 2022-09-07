import './currentweather.css';

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <p className='city'>Belgrade</p>
                <p className='weatherDesc'>Sunny</p>
            </div>
            <img src="" alt="weather" className='weatherIcon' />
        </div>
    );
}

export default CurrentWeather;