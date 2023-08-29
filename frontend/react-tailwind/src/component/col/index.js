import { useContext, useCallback, useEffect, useState, useRef } from "react";
import { MainContext } from "../../context";
import { checkTimeTrack } from "../../service/axios";
let classNames = require("classnames");

function Col({ row }) {
  const {
    setPinModal,
    setStopModal,
    setRequestModal,
    setSeletedStaff,
    disabledRow,
  } = useContext(MainContext);

  // const [disabled, setDisabled] = useState(false);
  let disabled = useRef(true);

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
    // console.log("111111-->", response);
    // setDisabled(response);
    disabled.current = response;
    // console.log("response------->", row.SID);
  }, []);
  if (String(disabledRow) === String(row.SID)) {
    console.log("1111------>", false);
    disabled.current = false;
  }

  useEffect(() => {
    checkTimeTrackStatus();
  }, []);

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
          disabled={!disabled.current}
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
    </tr>
  );
}

export default Col;
