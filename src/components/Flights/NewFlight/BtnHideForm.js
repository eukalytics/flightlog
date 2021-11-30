export default function BtnHideForm({setShowForm}) {
    return (
        <button onClick={() => setShowForm(false)} className="text-gray-200 hover:text-yellow-400 mt-2 text-sm underline">
            Cancel
        </button>
    )
}