export default function ErrorCard({ errorText }) {
    return (
        <div className="bg-gray-700 m-4 p-4 grid grid-cols-10 rounded">
            <div className="col-span-8 text-gray-300 px-4">
                <p className="pb-2 font-semibold">{errorText}</p>
            </div>
        </div>
    )
}