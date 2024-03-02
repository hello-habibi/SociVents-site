import React from 'react'

function ServiceCard() {
    return (
        <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Event </h2>
                <p>Feel Free to connect</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show More </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
