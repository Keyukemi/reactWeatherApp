import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const ForecastWeather = ({ data }) => {

    const Today = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(Today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, Today));

    console.log(forecastDays);

    return (
        <>
            <label htmlFor="" className="title"> Daily </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                    <label htmlFor="" className="day">{forecastDays[idx]}</label>
                                    <label htmlFor="" className="description">{item.weather[0].description}</label>
                                    <label htmlFor="" className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default ForecastWeather