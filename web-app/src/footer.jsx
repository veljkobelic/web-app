import React from "react";

function Footer(){

    var year = new Date().getFullYear();
    
    return (
        <div className="footer">
            <p className="label"> &copy; Copyright {year}</p>
        </div>
    );
}

export default Footer;