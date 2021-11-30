import { useState } from "react";
import BtnShowForm from "./BtnShowForm";
import FlightForm from "./FlightForm";

export default function FlightFormWrap({handleNewFlightSubmit, numFlights}) {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="mt-4">
            {showForm   ? <FlightForm handleNewFlightSubmit={handleNewFlightSubmit} numFlights={numFlights} />
                        : <BtnShowForm setShowForm={setShowForm} />
            }
        </div>
    )
}