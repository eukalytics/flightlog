import ChartBar from "./ChartBar";

export default function Chart({datapoints, maxFlights}) {
    return (
        <div className="bg-gray-700 m-5 px-10 grid grid-cols-12 h-60 border-2 border-white pt-10">
            {datapoints.map((point) => (
                <ChartBar point={point} maxFlights={maxFlights} key={point.month} />
            ))}
        </div>
    )
}