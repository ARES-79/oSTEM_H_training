import React from "react";
import "./home.css"
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar"

export default function Home() {

    return (
        <>
            <Header />
            <div className="home">
                <Sidebar />
                <Posts/>

            </div>
        </>
    )

}