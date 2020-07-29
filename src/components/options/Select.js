import React from 'react'

const Select=({onChangeHandler}) => {
    return (
        <div className="mr-4 flex relative w-1/2">
            <select onChange={onChangeHandler} className="appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none ">
                <option value="BUBBLE">Bubble Sort</option>
                <option value="SELECTION">Selection Sort</option>
                <option value="INSERTION">Insertion Sort</option>
                <option value="QUICK">Quick Sort</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    )
}

export default Select;