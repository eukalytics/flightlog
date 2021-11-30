import { useState } from "react";
import FlightList from "./components/Flights/FlightList";

const iniitialFlights =  [ 
  {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 24), notes: "Flew to the next galaxy."},
  {id: "f2", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 23), notes: "Top secret mission."},
  {id: "f3", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 22), notes: "Flew to the next planet."},
  {if: "f4", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 21), notes: "Learning how to fly."}
];

export default function App() {

  const [flights, setFlights] = useState(iniitialFlights);

  const handleAddFlight = (newFlightObj) => {
    setFlights(flights => {
      return [newFlightObj, ...flights];
    });
  }
  const currentYear = new Date().getFullYear().toString();
  const [filterYear, setFilterYear] = useState(currentYear);

  const handleFilterYearChange = (year) => {
    setFilterYear(year);
  }

  return (
    <div className="bg-gray-800 min-h-screen p-20">
      <FlightList 
        flights={flights} 
        handleAddFlight={handleAddFlight} 
        filterYear={filterYear} 
        handleFilterYearChange={handleFilterYearChange}
        currentYear={currentYear}
      />
    </div>
  );
}
