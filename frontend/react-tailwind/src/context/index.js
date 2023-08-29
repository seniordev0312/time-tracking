import { useState, createContext } from "react";
// import Pin from "./component/modal/pin";

export const MainContext = createContext("");

// type Props = { children: ReactNode };

function MainProvider({ children }) {
  const [isPinModal, setPinModal] = useState(false);
  const [isStopModal, setStopModal] = useState(false);
  const [isRequestModal, setRequestModal] = useState(false);
  const [selectedStaff, setSeletedStaff] = useState(0);
  const [disabledRow, setDisabledRow] = useState("");

  return (
    <MainContext.Provider
      value={{
        isPinModal,
        setPinModal,
        isStopModal,
        setStopModal,
        isRequestModal,
        setRequestModal,
        selectedStaff,
        setSeletedStaff,
        disabledRow,
        setDisabledRow,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
