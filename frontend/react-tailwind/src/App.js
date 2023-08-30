import "./App.css";
import Col from "./component/col";
import Header from "./component/header";
import { useContext, useEffect, useCallback, useState } from "react";
import { MainContext } from "./context";
import PinModal from "./component/modal/pin";
import StopModal from "./component/modal/stop";
import RequestModal from "./component/modal/request";
import { getAllStaffs } from "./service/axios";
import ReactPaginate from "react-paginate";

function App() {
  const [allData, setAllData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const { isPinModal, isStopModal, isRequestModal, disabledRow } =
    useContext(MainContext);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 5;
  // const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / 5);

  const getStaffData = useCallback(async () => {
    const response = await getAllStaffs();
    setAllData(response);
    setCurrentItems(response.slice(itemOffset, endOffset));
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allData.length;
    console.log(newOffset);
    setCurrentItems(allData.slice(newOffset, newOffset + 5));
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getStaffData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 min-h-[100vh] flex flex-col">
      <h1 className="text-3xl font-bold text-inherit p-10">Time Tracking</h1>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <Header />
                </thead>
                <tbody className="divide-y text-center divide-gray-200 bg-white">
                  {currentItems.map((data, index) => (
                    <Col key={index} row={data} ind={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
      {/* <Pin /> */}
      <div className="flex justify-center items-center flex-1 py-10">
        {isPinModal ? <PinModal /> : ""}
        {isStopModal ? <StopModal /> : ""}
        {isRequestModal ? <RequestModal /> : ""}
      </div>
    </div>
  );
}

export default App;
