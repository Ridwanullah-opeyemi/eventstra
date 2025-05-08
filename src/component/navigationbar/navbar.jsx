import { Link } from "react-router-dom"
import fstore from '/image/fstore.png';
import { useAuth } from "../../contexts/AuthContext";
import "./nav.css"


const Nav = () => {
    const { isLoggedIn,setIsLoggedIn,userName } = useAuth();

const handleLogout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
};

    return (
        <>
            {/* <Link to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>Log in </Link>|
                    <Link to="/register">Register </Link>| */}
            <div className="NavCon">
                <div className="NavHead">Lagos and Ogun deliveries will be done on Thursdays | Live Cow, Beef and Cow-sharing options available | Contact us to invest in our ranching projects - +234 7081048597 or +234 8143642387</div>
                <div className="NavHead NavLink">📞 For supplies(wholesale) and enquires call +234 903 1787 037, +234 814 364 2387 , +234 908 1707 267</div>
                <div className="NavLink">
                    {!isLoggedIn ? (
                        <span>
                            <Link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>Log in </Link> |
                            <Link to="/register">Register </Link> 
                        </span>
                    ) : (
                        <>
                            <span><div>Welcome back! {userName}</div></span> 
                            <div className="prov">
                                <div className="profile"><img src={fstore} alt="" /></div>
                                <Link to="puser">User profile</Link>
                            </div>
                        </>
                    )}

                    {/* <button onClick={handleLogout}>Logout</button> */}

                </div>
            </div>
            <div className="NavuCon">
                <div className="NavinputCon">
                    <Link to="/">   
                        <img src={fstore} alt="nwa" width={150} />
                    </Link>
                    <div className="seletOpt">
                        <select name="" id="">
                            <option value="">All storage</option>
                            <option>Baby food</option>
                            <option>Biscuite</option>
                            <option>cereals</option>
                            <option>vegitables</option>
                            <option>Tubers</option>
                            <option>Sweets</option>
                            <option>Fruits</option>
                            <option>Staples</option>
                            <option>Meat</option>
                            <option>Snacks</option>
                            <option>Drings</option>
                            <option>Processed</option>
                        </select>

                        <input type="text" />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        </button>
                    </div>
                </div>
                

                <div className="divfol">
                    <Link to="/allProducts">All product</Link>
                    <Link to="/addProduct">Add product</Link>
                    <Link to="/update/:id">Update product</Link>
                    <Link to="searchProduct">search product</Link>
                    {/* <div>
                        <div className="profile"><img src={fstore} alt="" /></div>
                        <Link to="puser">User profile</Link>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Nav