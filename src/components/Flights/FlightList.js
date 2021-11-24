import Flight from "./Flight";

export default function FlightList({flights}) {
    return (
        <div>
            <h2>Flights</h2>
            <Flight 
              pilot={flights[0].pilot}
              craft={flights[0].craft}
              date={flights[0].date}
              notes={flights[0].notes}  
            />
            <Flight 
              pilot={flights[1].pilot}
              craft={flights[1].craft}
              date={flights[1].date}
              notes={flights[1].notes}  
            />
            <Flight 
              pilot={flights[2].pilot}
              craft={flights[2].craft}
              date={flights[2].date}
              notes={flights[2].notes}  
            />
            <Flight 
              pilot={flights[3].pilot}
              craft={flights[3].craft}
              date={flights[3].date}
              notes={flights[3].notes}  
            />
        </div>
    )
}