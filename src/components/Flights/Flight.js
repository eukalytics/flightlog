import FlightDate from "./FlightDate"
export default function Flight({ pilot, craft, date, notes }) {
    return (
        <div className="bg-gray-700 m-4 p-4 grid grid-cols-10 rounded">
            <FlightDate date={date} />
            <div className="col-span-8">
                <h3>{pilot} ({craft})</h3>
                <h2 className>gFlights</h2>
                <p>{notes}</p>
            </div>
        </div>
    )
}