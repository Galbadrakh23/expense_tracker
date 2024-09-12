import React, { useState } from "react";
import { useRouter } from "next/navigation";
const RecordsModal = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({
    amount: "",
    name: "",
    transaction_type: "",
    description: "",
    payee: "",
    category: "",
    date: "",
    time: "",
    note: "",
  });

  const createRecord = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/records`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ amount, name, transaction_type, description }),
        }
      );
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create record
    console.log("input data", userData);
  };

  return (
    <>
      {isOpen && (
        <div
          id="expenseModal"
          className="fixed flex inset-0 bg-black bg-opacity-50 items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button onClick={onClose}>
              <span className="absolute top-2 right-3 text-gray-500 cursor-pointer">
                &times;
              </span>
            </button>
            <h2 className="text-left text-2xl font-semibold mb-4 text-black opacity-70">
              Add Record
            </h2>
            {/* Tabs */}
            <div className="flex justify-between mb-6">
              <button
                id="expenseTab"
                className="tab w-1/2 rounded-l-lg bg-blue-500 text-white font-semibold flex items-center"
              >
                Expense
              </button>
              <button
                id="incomeTab"
                className="tab w-1/2 rounded-r-lg bg-gray-200 text-gray-600 font-semibold"
              >
                Income
              </button>
            </div>

            {/* Form */}
            <form id="expenseForm" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={userData.amount}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="₮ 000.00"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write here"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="payee"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Payee
                </label>
                <input
                  type="text"
                  id="payee"
                  name="payee"
                  value={userData.payee}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write here"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={userData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Choose</option>
                  <option>Food</option>
                  <option>Rent</option>
                  <option>Utilities</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={userData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={userData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="note"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Note
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={userData.note}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write here"
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                id="submitBtn"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Record
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecordsModal;
