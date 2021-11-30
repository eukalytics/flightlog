import FlightCard from "./FlightCard";
import ErrorCard from "./ErrorCard";
import FlightForm from "./FlightForm";
import FlightFilter from "./FlightFilter";

export default function FlightList({flights, handleAddFlight, filterYear, handleFilterYearChange, currentYear}) {

  const handleNewFlightSubmit = (newFlightObj) => {
    const newFlight = {
      ...newFlightObj,
    }
    handleAddFlight(newFlight);
  }

  const filteredFlights = flights.filter((flight) => {
    return flight.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="bg-gray-900 p-5 rounded">
        <h2 className="text-gray-200 text-3xl font-semibold text-center">Flight Log</h2>
        <FlightForm handleNewFlightSubmit={handleNewFlightSubmit} numFlights={flights.length} />
        <FlightFilter handleFilterYearChange={handleFilterYearChange} currentYear={currentYear} />
        {filteredFlights.length 
          ? filteredFlights.map((flight, index) => (
            <FlightCard 
              key={index}
              pilot={flight.pilot} 
              craft={flight.craft} 
              date={flight.date} 
              notes={flight.notes} 
            />
          ))
          : <ErrorCard errorText={`No flights logged for ${filterYear}`} />
        }

    </div>
  )
}