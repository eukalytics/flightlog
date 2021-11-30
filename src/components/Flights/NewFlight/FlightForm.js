import { useState } from "react";
import BtnSubmitForm from "./BtnSubmitForm";

export default function FlightForm({ handleNewFlightSubmit, numFlights }) {
    const [newFlight, setNewFlight] = useState({
        pilot: '',
        craft: '',
        date: '',
        notes: '',
        id: `f${numFlights + 1}`
    });
    const handlePilotChange = (e) => {
        setNewFlight((newFlight) => {
            return { 
                ...newFlight,
                pilot: e.target.value,
            }
        });
    }
    const handleCraftChange = (e) => {
        setNewFlight((newFlight) => {
            return { 
                ...newFlight,
                craft: e.target.value,
            }
        });
    }
    const handleDateChange = (e) => {
        setNewFlight((newFlight) => {
            return { 
                ...newFlight,
                date: e.target.value,
            }
        });
    }
    const handleNotesChange = (e) => {
        setNewFlight((newFlight) => {
            return { 
                ...newFlight,
                notes: e.target.value,
            }
        });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const submittedFlight = {
            ...newFlight, 
            date: new Date(newFlight.date)
        };
        handleNewFlightSubmit(submittedFlight)
        setNewFlight({
            pilot: '',
            craft: '',
            date: '',
            notes: '',
            id: ''
        });
    }   
    return(
        <form 
            onSubmit={handleFormSubmit}
            className="bg-gray-700 m-4 p-4 rounded"
        >
            <div>
                <label >Pilot</label>
                <input type="text" name="pilot" value={newFlight.pilot} onChange={handlePilotChange} />
            </div>
            <div>
                <label>Craft</label>
                <input type="text" name="craft" value={newFlight.craft} onChange={handleCraftChange}/>
            </div>
            <div>
                <label> Date</label>
                <input type="date" name="date" value={newFlight.date} min="2018-01-01" max="2022-12-31" onChange={handleDateChange} />
            </div>
            <div>
                <label>Notes</label>
                <textarea name="notes" value={newFlight.notes} onChange={handleNotesChange} />
            </div>
            <BtnSubmitForm />
        </form>
    )
}