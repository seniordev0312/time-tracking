import { useCallback, useContext, useState } from "react";
import { MainContext } from "../../context";
import { checkPinCode } from "../../service/axios";

function PinModal() {
  const closeModal = useCallback(() => {
    setPinModal(false);
  }, []);

  const { selectedStaff, setPinModal, setDisabledRow } =
    useContext(MainContext);
  // const { selectedStaff } = useContext(MainContext);
  const [pin, setPin] = useState("");

  const handleChange = useCallback((e) => {
    setPin(e.target.value);
  }, []);

  const checkPin = useCallback(async () => {
    // e.preventDefault();
    console.log(pin);
    const data = { pin: pin };
    try {
      // console.log(data, selectedStaff);
      await checkPinCode(data, selectedStaff);
      setDisabledRow(selectedStaff);

      alert("Time track started successfully!");
      closeModal();
    } catch {
      alert("Passcode does not match");
      closeModal();
    }
  }, [pin]);

  return (
    // <div
    //   id="authentication-modal"
    //   tabIndex="-1"
    //   // aria-hidden="true"
    //   className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    // >
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
        <div className="px-6 py-6 lg:px-8 flex flex-col gap-4">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Start the time track
          </h3>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              PIN
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••"
              value={pin}
              onChange={(e) => handleChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            onClick={() => checkPin()}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Please start the time tracking with the PIN
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default PinModal;
