import { useContext} from "react"
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";

const Header = ({theme}) => {
    const [isDark, setDark] = useContext(ThemeContext);
    const clickHandle = ()=>{
        setDark(!isDark);
        localStorage.setItem('IsDark', !isDark);
    }
  return (
    <header className={`header-container ${isDark?'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><Link to="/">Where in the world?</Link></h2>
        <p className="theme-changer" onClick={clickHandle}><i className={`fa-solid ${isDark?'fa-sun':'fa-moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark'} Mode</p>
      </div>
    </header>
  )
}

export default Header
