import { useState } from "react";

export default function FlightForm({ handleNewFlightSubmit }) {
    const [newFlight, setNewFlight] = useState({
        title: '',
        craft: '',
        date: '',
        notes: '',
    });
    const handleTitleChange = (e) => {
        setNewFlight((newFlight) => {
            return { 
                ...newFlight,
                title: e.target.value,
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
            title: '',
            craft: '',
            date: '',
            notes: '',
        });
    }   
    return(
        <form 
            onSubmit={handleFormSubmit}
            className="bg-gray-700 m-4 p-4 rounded"
        >
            <div>
                <label >Pilot</label>
                <input type="text" name="pilot" value={newFlight.title} onChange={handleTitleChange} />
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
            <div>
                <button type="submit">Add Flight</button>
            </div>
        </form>
    )
}