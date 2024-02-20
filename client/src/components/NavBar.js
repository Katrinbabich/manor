import React, {useContext} from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import './NavBar.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom"

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)

        user.setIsAdmin(false)

        localStorage.removeItem('token')
    }
      return (
        <Navbar className="navbar1" id="bib1">
            <form className="ms-auto" action={SHOP_ROUTE} method="get" >
            <button className='imya'>GluManor</button>
            </form>
             <Container>
                 {user.isAuth ?
                     <Nav className="ms-auto">

                         <div className="zzz3">
                         <Button
                             className= "ms-2"
                             variant={"none"}
                             onClick={() => navigate(BASKET_ROUTE)}
                         >
                             Избранное
                         </Button>
                         </div>
                         {user.isAdmin ?
                             <div className="zzz3">
                                 <Button
                                     className="ms-2"
                                     variant={"none"}
                                     onClick={() => navigate(ADMIN_ROUTE)}
                                 >
                                     Админ панель
                                 </Button>

                             </div>
                             :
                             <div></div>
                         }
                         <div className="zzz3">
                         <Button className= "ms-2"
                                 variant={"none"}

                                 onClick={() => logOut()}
                         >
                             Выйти
                         </Button>
                         </div>
                     </Nav>
                     :
                     <div className="ms-auto">
                     <Nav className="zzz3" >
                         <Button variant={"none"} className= "ms-2" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                     </Nav>
                     </div>
                 }
             </Container>
         </Navbar>
     );
 });
export default NavBar;





