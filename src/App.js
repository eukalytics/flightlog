import { useState } from "react";
import FlightList from "./components/Flights/FlightList";

const iniitialFlights =  [ 
  {id: "f36", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 24), notes: "Flew to the next galaxy."},
  {id: "f35", pilot: "Kenny", craft: "Classified", date: new Date(2021, 10, 23), notes: "Top secret mission."},
  {id: "f34", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 22), notes: "Flew to the next planet."},
  {id: "f33", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 21), notes: "Learning how to fly."},
  {id: "f32", pilot: "Kenny", craft: "Viper", date: new Date(2021, 10, 21), notes: "Learning how to fly."},
  {id: "f31", pilot: "Kenny", craft: "Viper", date: new Date(2021, 9, 21), notes: "Learning how to fly."},
  {id: "f30", pilot: "Kenny", craft: "Viper", date: new Date(2021, 9, 21), notes: "Learning how to fly."},
  {id: "f29", pilot: "Kenny", craft: "Viper", date: new Date(2021, 8, 21), notes: "Learning how to fly."},
  {id: "f28", pilot: "Kenny", craft: "Viper", date: new Date(2021, 8, 21), notes: "Learning how to fly."},
  {id: "f27", pilot: "Kenny", craft: "Viper", date: new Date(2021, 8, 21), notes: "Learning how to fly."},
  {id: "f26", pilot: "Kenny", craft: "Viper", date: new Date(2021, 7, 21), notes: "Learning how to fly."},
  {id: "f25", pilot: "Kenny", craft: "Viper", date: new Date(2021, 7, 21), notes: "Learning how to fly."},
  {id: "f24", pilot: "Kenny", craft: "Viper", date: new Date(2021, 7, 21), notes: "Learning how to fly."},
  {id: "f23", pilot: "Kenny", craft: "Viper", date: new Date(2021, 7, 21), notes: "Learning how to fly."},
  {id: "f22", pilot: "Kenny", craft: "Viper", date: new Date(2021, 7, 21), notes: "Learning how to fly."},
  {id: "f21", pilot: "Kenny", craft: "Viper", date: new Date(2021, 6, 21), notes: "Learning how to fly."},
  {id: "f19", pilot: "Kenny", craft: "Viper", date: new Date(2021, 6, 21), notes: "Learning how to fly."},
  {id: "f18", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f17", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f16", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f15", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f14", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f13", pilot: "Kenny", craft: "Viper", date: new Date(2021, 5, 21), notes: "Learning how to fly."},
  {id: "f12", pilot: "Kenny", craft: "Viper", date: new Date(2021, 4, 21), notes: "Learning how to fly."},
  {id: "f11", pilot: "Kenny", craft: "Viper", date: new Date(2021, 4, 21), notes: "Learning how to fly."},
  {id: "f10", pilot: "Kenny", craft: "Viper", date: new Date(2021, 3, 21), notes: "Learning how to fly."},
  {id: "f9", pilot: "Kenny", craft: "Viper", date: new Date(2021, 2, 21), notes: "Learning how to fly."},
  {id: "f8", pilot: "Kenny", craft: "Viper", date: new Date(2021, 2, 21), notes: "Learning how to fly."},
  {id: "f7", pilot: "Kenny", craft: "Viper", date: new Date(2021, 2, 21), notes: "Learning how to fly."},
  {id: "f6", pilot: "Kenny", craft: "Viper", date: new Date(2021, 1, 21), notes: "Learning how to fly."},
  {id: "f5", pilot: "Kenny", craft: "Viper", date: new Date(2021, 1, 21), notes: "Learning how to fly."},
  {id: "f4", pilot: "Kenny", craft: "Viper", date: new Date(2021, 0, 21), notes: "Learning how to fly."},
  {id: "f3", pilot: "Kenny", craft: "Viper", date: new Date(2021, 0, 21), notes: "Learning how to fly."},
  {id: "f2", pilot: "Kenny", craft: "Viper", date: new Date(2021, 0, 21), notes: "Learning how to fly."},
  {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 0, 21), notes: "Learning how to fly."},
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
