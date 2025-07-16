import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ label, selectedDate, onChange, error }) => (
  <div className="flex flex-col w-full">
    <label className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Seleccionar fecha"
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
      className="p-2 border border-gray-300 rounded"
    />
    {error && <span className="text-red-500">{error}</span>}
  </div>
);

export default DateInput;
