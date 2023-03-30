import React, { useState } from 'react';
import './stylesPages/Loader.css'

const Loader = () => {
    const [closeloader, setcloseloader] = useState(true)


    const timer = setTimeout(() => {
        setcloseloader(false)

    }, 4000);

    return (
        <div className={closeloader ? 'background' : 'close__loader'} >
            <div className='logo'>
                <div className='brush1'>
                    <div className="color"></div>
                    <div className="lines"></div>
                </div>
                <div className="brush2">
                    <div className="color2"></div>
                </div>
                <div className="brush3"></div>
            </div>

        </div >
    );
};

export default Loader;