import React from 'react';
import style from './Menu.css';
const Menu = () => {
    return (
        <div>
                <nav className="catalog">
                    <a href="/course">Course</a>
                    <a href="/reviue">Reviue</a>
                    <a href="/manege">Manage Invetory</a>
                </nav>
        </div>
    );
};

export default Menu;