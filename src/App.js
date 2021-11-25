import { useState } from "react";
import FlightList from "./components/Flights/FlightList";

export default function App() {
  const flights = [ 
    {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 24), notes: "Flew to the next galaxy."},
    {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 23), notes: "Flew to the next galaxy."},
    {id: "f3", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 22), notes: "Flew to the next galaxy."},
    {if: "f4", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 21), notes: "Flew to the next galaxy."}
  ]
  const handleAddFlight = (newFlightObj) => {
    console.log(newFlightObj);
  }
  const [filterYear, setFilterYear] = useState('2021');

  const handleFilterYearChange = (year) => {
    setFilterYear(year);
    console.log(year);
  }
  return (
    <div className="bg-gray-800 min-h-screen p-20">
      <FlightList flights={flights} handleAddFlight={handleAddFlight} filterYear={filterYear} handleFilterYearChange={handleFilterYearChange} />
    </div>
  );
}
