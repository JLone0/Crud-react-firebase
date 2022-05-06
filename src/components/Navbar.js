import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider"

const Navbar = () => {

    const { user, signOutUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log(error.code)

        };
    };


    return (
        <div>
            {
                user ? (
                    <>
                        <NavLink to="/"> Inicio |</NavLink>
                        <NavLink to="/provider"> Provider |</NavLink>
                        <NavLink to="/products"> Products |</NavLink>
                        <button onClick={handleLogout}> Logout </button>
                    </>

                ) : (
                    <>
                        <NavLink to="/login"> Login |</NavLink>
                        <NavLink to="/register"> Register | </NavLink>
                    </>
                )
            }
        </div>
    );
};

export default Navbar;