import FlightDate from "./FlightDate"
export default function Flight({ pilot, craft, date, notes }) {
    return (
        <div>
            <h3>{pilot} ({craft})</h3>
            <FlightDate date={date} />
            <p>{notes}</p>
            <hr />
        </div>
    )
}