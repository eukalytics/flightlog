export default function ChartBar({ point, maxFlights }) {

    let barFillHeight = '0%';

    if (maxFlights > 0){
        barFillHeight = (100 - (Math.round((point.flights / maxFlights) * 100))) + '%';
    }
    return (
        <div>
            <div className="h-full mx-5 relative bg-yellow-400">
                <div className='bg-gray-500' style={{height: barFillHeight}}></div>
                <div className='text-center absolute inset-x-0 bottom-0 text-gray-900'>{point.month}</div>
            </div>
        </div>
    )
}