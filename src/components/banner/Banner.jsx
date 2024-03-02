import React from 'react'

function Banner() {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-white text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-white">We provide the best experience one can get through an event . </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
