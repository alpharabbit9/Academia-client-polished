import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarComp } from '../shared/NavbarComp';
import { FooterComp } from '../shared/FooterComp';

const Root = () => {

    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div className='bg-[#FDF6EA] text-gray-900'>
            <header>

                {noHeaderFooter ||<NavbarComp></NavbarComp>}

            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                {noHeaderFooter ||<FooterComp></FooterComp>}

            </footer>
        </div>
    );
};

export default Root;