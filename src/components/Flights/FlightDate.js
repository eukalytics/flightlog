export default function FlightDate({date}) {
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();
    return (
        <div className="bg-gray-900 text-white text-center border-white border-2 py-2 rounded">
            <span className="block font-bold">{month}</span>
            <span className="block">{year}</span>
            <span className="block font-bold text-2xl">{day}</span>
        </div>
    )
}