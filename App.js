import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";


const App = () => {
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('IsDark')));
    return(
        <ThemeContext.Provider value={[isDark, setDark]}>
        <Header/>
        <Outlet/>
        </ThemeContext.Provider>
    )
}

export default App;
