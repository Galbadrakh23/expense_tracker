import React from "react";

const RecordsModal = () => {
  return (
    <div
      id="expenseModal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <span className="close absolute top-2 right-3 text-gray-500 cursor-pointer">
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">Add Record</h2>

        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button
            id="expenseTab"
            className="tab w-1/2 py-2 rounded-l-lg bg-blue-500 text-white font-semibold"
          >
            Expense
          </button>
          <button
            id="incomeTab"
            className="tab w-1/2 py-2 rounded-r-lg bg-gray-200 text-gray-600 font-semibold"
          >
            Income
          </button>
        </div>

        {/* Form */}
        <form id="expenseForm">
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="₮ 000.00"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="payee"
              className="block text-sm font-medium text-gray-700"
            >
              Payee
            </label>
            <input
              type="text"
              id="payee"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write here"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Choose</option>
              <option>Food</option>
              <option>Rent</option>
              <option>Utilities</option>
            </select>
          </div>

          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Note
            </label>
            <textarea
              id="note"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write here"
            />
          </div>

          <button
            type="submit"
            id="submitBtn"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecordsModal;
