export default function BtnShowForm({setShowForm}) {
    return (
        <div>
            <button 
                onClick={() => setShowForm(true)}
                className="bg-gray-900 text-white px-2 py-1 rounded hover:bg-yellow-400 border-2 border-yellow-400 text-sm"
            >
                Add Flight
            </button>
        </div>
    )
}