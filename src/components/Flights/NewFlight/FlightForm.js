import { useState } from "react";
import BtnHideForm from "./BtnHideForm";
import BtnSubmitForm from "./BtnSubmitForm";

export default function FlightForm({ handleNewFlightSubmit, numFlights, setShowForm }) {
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
            className="bg-gray-700 mt-6 m-4 p-4 rounded w-full md:w-2/3 lg:w-1/2 xl:w-1/4 mx-auto"
        >
            <div className="mb-2">
                <label className="text-white block">Pilot:</label>
                <input type="text" name="pilot" value={newFlight.pilot} onChange={handlePilotChange} className="w-full"/>
            </div>
            <div className="mb-2">
                <label className="text-white block">Craft:</label>
                <input type="text" name="craft" value={newFlight.craft} onChange={handleCraftChange} className="w-full"/>
            </div>
            <div className="mb-2">
                <label className="text-white block"> Date:</label>
                <input type="date" name="date" value={newFlight.date} min="2018-01-01" max="2022-12-31" onChange={handleDateChange} />
            </div>
            <div className="mb-2">
                <label className="text-white block">Notes:</label>
                <textarea name="notes" value={newFlight.notes} onChange={handleNotesChange} className="w-full"/>
            </div>
            <div className="text-center">
                <BtnSubmitForm />
                <BtnHideForm setShowForm={setShowForm} />
            </div>
        </form>
    )
}