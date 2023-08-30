import { useContext, useCallback, useEffect, useState, useRef } from "react";
import { MainContext } from "../../context";
import { checkTimeTrack } from "../../service/axios";

function Col({ row }) {
  const {
    setPinModal,
    setStopModal,
    setRequestModal,
    setSeletedStaff,
    disabledRow,
  } = useContext(MainContext);

  const [disabledStatus, setDisabledStatus] = useState(true);

  const openPinModal = useCallback(() => {
    setPinModal(true);
    setStopModal(false);
    setRequestModal(false);
    setSeletedStaff(Number(row.SID));
  }, []);

  const openStopModal = useCallback(() => {
    setPinModal(false);
    setStopModal(true);
    setRequestModal(false);
    setSeletedStaff(0);
  }, []);

  const openRequestModal = useCallback(() => {
    setPinModal(false);
    setStopModal(false);
    setRequestModal(true);
  }, []);

  const checkTimeTrackStatus = useCallback(async () => {
    const response = await checkTimeTrack(row.SID);
    console.log("resoibse", response);
    setDisabledStatus(response);
  }, []);
  useEffect(() => {
    checkTimeTrackStatus();
  }, [disabledRow]);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {row.SID}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
        {row.NAME_FIRST + " " + row.NAME_LAST}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <button
          type="button"
          disabled={!disabledStatus}
          onClick={() => openPinModal()}
          className="rounded-md disabled:opacity-25 bg-slate-50 px-10 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200"
        >
          Start
        </button>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <button
          type="button"
          onClick={() => openStopModal()}
          className="rounded-md bg-red-200 px-10 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300"
        >
          Stop
        </button>
      </td>
      <td className="relative whitespace-nowrap py-4 text-sm font-medium ">
        <button
          type="button"
          onClick={() => openRequestModal()}
          className="rounded-md bg-slate-100 px-10 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Request
        </button>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="flex items-center h-5 justify-center">
          <input
            id="helper-radio"
            aria-describedby="helper-radio-text"
            type="radio"
            disabled={disabledStatus ? false : true}
            value=""
            defaultChecked={disabledStatus ? true : false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
    </tr>
  );
}

export default Col;
