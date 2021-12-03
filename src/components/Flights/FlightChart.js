import Chart from "../Chart/Chart";

export default function FlightChart({flights}) {
    const datapoints = [
        {month: 'Jan', flights: 0},
        {month: 'Feb', flights: 0},
        {month: 'Mar', flights: 0},
        {month: 'Apr', flights: 0},
        {month: 'May', flights: 0},
        {month: 'Jun', flights: 0},
        {month: 'Jul', flights: 0},
        {month: 'Aug', flights: 0},
        {month: 'Sep', flights: 0},
        {month: 'Oct', flights: 0},
        {month: 'Nov', flights: 0},
        {month: 'Dec', flights: 0}
    ]

    for(const flight of flights){
        const flightMonth = flight.date.getMonth();
        datapoints[flightMonth]['flights'] ++;
    }
    const arrFlights = datapoints.map((point) => point.flights);
    const maxFlights = Math.max(...arrFlights);
    return (
        <Chart maxFlights={maxFlights} datapoints={datapoints} />
    )
}