export default function BtnSubmitForm() {
    return (
        <div className="text-center">
            <button 
                type="submit" 
                className="
                    bg-gray-900 text-white text-sm px-2 py-1 rounded border-2 border-yellow-400
                    hover:bg-yellow-400 hover:text-gray-900
                "
            >
                Submit
            </button>
        </div>
    )
}