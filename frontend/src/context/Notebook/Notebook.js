import { useContext, createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNotebooks } from "../../store/notebooks";

export const NotebookContext = createContext();

export const useNotebook = () => useContext(NotebookContext);

export default function NotebookProvider({ children }) {
  const dispatch = useDispatch();
  const [notebook, setNotebook] = useState();

  const notebooks = useSelector((state) => state.notebooks);

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  return (
    <NotebookContext.Provider value={notebook}>
      {children}
    </NotebookContext.Provider>
  );
}
