export default function FlightFilter({handleFilterYearChange, filterYear}){

    const handleOptionChange = (e) => {
        handleFilterYearChange(e.target.value);
    }
    return (
        <div className="px-5">
            <label className="text-white font-semibold block" >Filter By Year</label>
            <select onChange={handleOptionChange} value={filterYear} className="p-2 mt-2 border-yellow-400 border-2">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
    )
}