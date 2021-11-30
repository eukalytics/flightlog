import FlightFormWrap from "./NewFlight/FlightFormWrap";
import FlightFilter from "./FlightFilter";
import FlightListContent from "./FlightListContent.js";

export default function FlightList({flights, handleAddFlight, filterYear, handleFilterYearChange}) {

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
        <FlightFormWrap handleNewFlightSubmit={handleNewFlightSubmit} numFlights={flights.length} />
        <FlightFilter handleFilterYearChange={handleFilterYearChange} filterYear={filterYear} />
        <FlightListContent flights={filteredFlights} year={filterYear} />
    </div>
  )
}