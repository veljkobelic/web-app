import React from "react";
import ReactDom from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header/>
        <Note/>
        <Footer/>
    </>
);