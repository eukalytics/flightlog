export default function FlightDate({date}) {
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();
    return (
        <div>
            <p>{day} {month} {year}</p>
        </div>
    )
}