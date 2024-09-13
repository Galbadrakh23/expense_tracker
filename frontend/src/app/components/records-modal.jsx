import React, { useState } from "react";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";

const RecordsModal = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    amount: "",
    transaction_type: "expense", // default to expense
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTabChange = (type) => {
    setUserData((prevState) => ({
      ...prevState,
      transaction_type: type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("input data", userData);
    createRecords();
  };

  const createRecords = async () => {
    try {
      const response = await axios.post(`${apiUrl}/records`, userData);
      if (response.status === 201) {
        toast.success("Record successfully created", { autoClose: 1000 });
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
          className="fixed flex inset-0 bg-black bg-opacity-50 items-center justify-center z-50 rounded-xl"
        >
          <div className="w-full max-w-3xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 rounded-t-xl bg-white border-b">
              <h5 className="text-lg font-medium text-gray-900">Add Record</h5>
              <button onClick={onClose}>
                <img src="close.svg" alt="close" />
              </button>
            </div>
            <div className="flex p-6 shadow-lg bg-white max-w-3xl w-full rounded-b-xl relative">
              <div className="w-full flex flex-row">
                <div className="w-1/2 flex flex-col pr-4">
                  <div className="flex justify-between mb-6">
                    <button
                      id="expenseTab"
                      onClick={() => handleTabChange("EXP")}
                      className={`w-1/2 rounded-full font-medium py-2 ${
                        userData.transaction_type === "EXP"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      Expense
                    </button>
                    <button
                      id="incomeTab"
                      onClick={() => handleTabChange("INC")}
                      className={`w-1/2 rounded-full font-medium py-2 ${
                        userData.transaction_type === "INC"
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      Income
                    </button>
                  </div>

                  {/* Amount */}
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

                  {/* Category */}
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
                      placeholder="Write or find category"
                    >
                      <option className="text-gray-400">
                        Write or find category
                      </option>
                      <option>Food</option>
                      <option>Rent</option>
                      <option>Utilities</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="flex justify-between">
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

                    {/* Time */}
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
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    id="submitBtn"
                    className={`w-full rounded-full py-2 px-8 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 mt-6 ${
                      userData.transaction_type === "INC"
                        ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                        : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
                    }`}
                  >
                    Add Record
                  </button>
                </div>

                {/* Right Column (Payee, Note) */}
                <div className="w-1/2 flex flex-col pl-4">
                  {/* Payee */}
                  <div className="mb-4">
                    <label
                      htmlFor="payee"
                      className="block text-sm font-medium text-gray-700 text-left pl-2"
                    >
                      Name
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

                  {/* Note */}
                  <div className="mb-4">
                    <label
                      htmlFor="note"
                      className="block text-sm font-medium text-gray-700 text-left pl-2"
                    >
                      Note
                    </label>
                    <textarea
                      type="text"
                      value={userData.description}
                      onChange={handleChange}
                      className="mt-1 block w-full h-[230px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecordsModal;
