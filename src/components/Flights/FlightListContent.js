import ErrorCard from "./ErrorCard"
import FlightCard from "./FlightCard"

export default function FlightListContent({flights, year}) {
   
    if(!flights.length){
        return (<ErrorCard errorText={`No flights logged for ${year}`}/>)
    }

    return (
        <div>
            {
                flights.map((flight) => (
                    <FlightCard 
                        key={flight.id}
                        pilot={flight.pilot} 
                        craft={flight.craft} 
                        date={flight.date} 
                        notes={flight.notes} 
                    />
                ))
            }
        </div>
    )

}