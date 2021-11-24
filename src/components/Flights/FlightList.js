import FlightCard from "./FlightCard";

export default function FlightList({flights}) {
    return (
        <div className="bg-gray-900 p-5 rounded">
            <h2 className="text-gray-200 text-3xl font-semibold text-center">Flight Log</h2>
            <FlightCard
              pilot={flights[0].pilot}
              craft={flights[0].craft}
              date={flights[0].date}
              notes={flights[0].notes}  
            />
            <FlightCard
              pilot={flights[1].pilot}
              craft={flights[1].craft}
              date={flights[1].date}
              notes={flights[1].notes}  
            />
            <FlightCard 
              pilot={flights[2].pilot}
              craft={flights[2].craft}
              date={flights[2].date}
              notes={flights[2].notes}  
            />
            <FlightCard 
              pilot={flights[3].pilot}
              craft={flights[3].craft}
              date={flights[3].date}
              notes={flights[3].notes}  
            />
        </div>
    )
}