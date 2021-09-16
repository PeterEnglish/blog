import React from 'react';
import './topbar.css';


export default function TopBar() {
    return (
        <div className="topbar">
            
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-linkedin-in"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            
            </div>
            <div className="topRight">
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
        
}
