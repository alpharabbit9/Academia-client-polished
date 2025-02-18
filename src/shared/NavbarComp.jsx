
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from '../assets/pngtree-book-clipart-png-image_9043539.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProivder";
import { Dropdown } from "flowbite-react";

export function NavbarComp() {

  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <Navbar fluid rounded className="  w-full bg-opacity-50 bg-[#FDF6EA] px-8 ">
      <Navbar.Brand href="https://flowbite-react.com">

        <Link to={'/'}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Aca<span className="text-blue-800">demia</span></span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {
          user && user?.email ?
            <>
              <img className="w-11 rounded-full mr-3" src={user?.photoURL} alt="" />

              <Button className="bg-[#D08345]" onClick={() => {
                userLogOut();
                navigate('/')
              }}>Logout</Button>
            </>
            :
            <Link to={'/login'}>
              <Button className="bg-[#D08345]">Login</Button>
            </Link>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to={'/'}>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
        </NavLink>
        <NavLink to={'allClass'}>
          <Navbar.Link href="#">All Classes</Navbar.Link>
        </NavLink>
        <NavLink to={'/aboutUs'}>
          <Navbar.Link href="#">About</Navbar.Link>
        </NavLink>
        {
          user && <>
            <NavLink to={'/teacherForm'}>
              <Navbar.Link href="#">Teach on Acadmia</Navbar.Link>
            </NavLink>
            <NavLink to={'/dashboard'}>
              <Navbar.Link href="#">Dashboard</Navbar.Link>
            </NavLink>
          </>
        }

      </Navbar.Collapse>
    </Navbar>
  );
}
