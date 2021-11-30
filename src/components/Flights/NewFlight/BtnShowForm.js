export default function BtnShowForm({setShowForm}) {
    return (
        <div className="text-center">
            <button 
                onClick={() => setShowForm(true)}
                className="
                    bg-gray-900 text-white text-sm px-2 py-1 rounded border-2 border-yellow-400
                    hover:bg-yellow-400 hover:text-gray-900
                "
            >
                Add Flight
            </button>
        </div>
    )
}