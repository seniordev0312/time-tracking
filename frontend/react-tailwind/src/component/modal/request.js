import { useContext, useCallback, useState } from "react";
import { MainContext } from "../../context";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RequestModal() {
  const setRequestModal = useContext(MainContext);
  const closeModal = useCallback(() => {
    setRequestModal(false);
  }, []);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="relative w-full max-w-md] max-h-full">
      <div className="relative bg-white rounded-lg shadow min-h-[80% dark:bg-gray-700">
        <button
          type="button"
          onClick={() => closeModal()}
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Request more times to log
          </h3>
          <form className="space-y-6" action="#">
            <div className="flex flex-row gap-10">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Name"
                className="bg-gray-50 flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <input
                type="text"
                name="text"
                id="texxt"
                placeholder="Surname"
                className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex-1 pl-2.5 pr-2.5">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>

              <input
                type="text"
                name="text"
                placeholder="Hours"
                className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit the request to admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestModal;
