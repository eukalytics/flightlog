import FlightList from "./components/Flights/FlightList";

export default function App() {
  const flights = [ 
    {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 24), notes: "Flew to the next galaxy."},
    {id: "f1", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 23), notes: "Flew to the next galaxy."},
    {id: "f3", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 22), notes: "Flew to the next galaxy."},
    {if: "f4", pilot: "Kenny", craft: "Viper", date: new Date(2021, 11, 21), notes: "Flew to the next galaxy."}
  ]
  return (
    <div>
      <FlightList flights={flights} />
    </div>
  );
}
