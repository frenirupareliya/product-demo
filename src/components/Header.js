import { useNavigate } from "react-router-dom";
function Header() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleClick = () => {
        const token = localStorage.getItem("token")
        navigate("/")
        if(token){
            localStorage.clear("token")
        } else {
            navigate("/login")
        }
    
    }
    return(
        <header>
        <button 
          style={{float:"right" , background:"gray" ,color:"white",width:"850px", border:"5px solid black" ,padding:"20px"}}
          onClick={handleClick}
        >{token ?`Logout` : `Login`}</button>
        </header> 
    )
}
export default Header;