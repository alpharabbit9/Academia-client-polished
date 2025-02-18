import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div className='flex'>
            <div className='h-screen bg-[#FDF6EA] text-gray-950 w-64 py-12 px-4'>
                <ul>
                    <li>
                        <NavLink
                            to={'/dashboard/addClass'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600  px-4 py-2 block rounded'
                                    : ' px-4 py-2 block'
                            }
                        >
                            Add Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/myClass'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600  px-4 py-2 block rounded'
                                    : ' px-4 py-2 block'
                            }
                        >
                            My Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/myTeacherProfile'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600  px-4 py-2 block rounded'
                                    : ' px-4 py-2 block'
                            }
                        >
                            My Profile
                        </NavLink>
                    </li>

                    <div className="divider"></div>


                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600  px-4 py-2 block rounded'
                                    : ' px-4 py-2 block'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='p-7 flex-1'>
                <h2 className="text-5xl font-bold text-center">Teacher Dashboard</h2>
                <div className="divider"></div>
                <Outlet />
            </div>
        </div>
    );
};

export default TeacherDashboard;
