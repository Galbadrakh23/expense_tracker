import React, { useState } from "react";
import { apiUrl } from "@/utils/util";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const RecordsModal = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    amount: "",
    // transaction_type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // const router = useRouter();

    e.preventDefault();
    console.log("input data", userData);
    createRecords();
  };

  const createRecords = async () => {
    try {
      const response = await axios.post(`${apiUrl}/records`, userData);
      if (response.status === 201) {
        toast.success("Record successfully created", { autoClose: 500 });
        onClose();
      }
    } catch (error) {
      console.error("There was an error creating record:", error);
      toast.error("Failed to create record. Please try again.");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="expenseModal"
          className="fixed flex inset-0 bg-black bg-opacity-50 items-center justify-center z-50"
        >
          <div className="flex bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
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
                  className="tab w-1/2 rounded-full bg-blue-500 text-white font-normal flex items-center"
                >
                  Expense
                </button>
                <button
                  id="incomeTab"
                  className="tab w-1/2 rounded-full bg-gray-200 text-gray-600 font-normal"
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
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 text-left pl-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
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
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    id="submitBtn"
                    className="w-full rounded-full py-2 px-8 bg-blue-500 text-white font-thin hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Record
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col items-starts justify-starts pt-8 py-6 w-[500px]">
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
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write here"
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
                  type="text"
                  id="note"
                  name="note"
                  value={userData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write here"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecordsModal;
