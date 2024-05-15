import React from 'react';

const ItemMenu = ({ label, href }) => {
    return (
        <li className="nav-item">
            <a className="menu-item nav-link btn btn-link" href={href}>{label}</a>
        </li>
    );
};

export default ItemMenu;
