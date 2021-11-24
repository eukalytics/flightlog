import FlightDate from "./FlightDate"
export default function FlightCard({ pilot, craft, date, notes }) {
    return (
        <div className="bg-gray-700 m-4 p-4 grid grid-cols-10 rounded">
            <FlightDate date={date} />
            <div className="col-span-8 text-gray-300 px-4">
                <p className="pb-2"><span className="font-semibold">Pilot:</span> {pilot}</p>
                <p className="pb-2"><span className="font-semibold">Spacecraft:</span> {craft}</p>
                <p className=""><span className="font-semibold">Notes:</span> {notes}</p>
            </div>
        </div>
    )
}