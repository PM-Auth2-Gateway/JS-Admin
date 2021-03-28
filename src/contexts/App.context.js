import { useContext, createContext } from 'react';

const AppContext = createContext(undefined);
AppContext.displayName = 'AppContext';

export const useAppContext = () => useContext(AppContext);

export default AppContext;
