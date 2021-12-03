import { useState } from "react";
import FlightFormWrap from "./NewFlight/FlightFormWrap";
import FlightFilter from "./FlightFilter";
import FlightListContent from "./FlightListContent.js";
import FlightChart from "./FlightChart";

export default function FlightList({flights, handleAddFlight, filterYear, handleFilterYearChange}) {

  const [showForm, setShowForm] = useState(false);
  const handleNewFlightSubmit = (newFlightObj) => {
    const newFlight = {
      ...newFlightObj,
    }
    handleAddFlight(newFlight);
    setShowForm(false);
  }

  const filteredFlights = flights.filter((flight) => {
    return flight.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div className="bg-gray-900 p-5 rounded">
        <h2 className="text-gray-200 text-3xl font-semibold text-center">Flight Log</h2>
        <FlightFormWrap handleNewFlightSubmit={handleNewFlightSubmit} numFlights={flights.length} showForm={showForm} setShowForm={setShowForm}/>
        <FlightChart flights={flights} />
        <FlightFilter handleFilterYearChange={handleFilterYearChange} filterYear={filterYear} />
        <FlightListContent flights={filteredFlights} year={filterYear} />
    </div>
  )
}