import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Analytics from "./Analytics";
const MainComponent = () => {

    return (
        <div className='wrapper'>
        <Sidebar />
        <div className='main'>
        <Navbar />
        <main className="content">
        <Analytics/>
        </main>
        </div>
        
        
      </div>
    );
    }

export default MainComponent;