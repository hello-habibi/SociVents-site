import React from 'react'

function FAQ() {
    return (
        <><h2 className='mt-3 pb-4 text-4xl text-white font-semibold border-b-2 border-blue-400'>Frequently Asked Questions </h2><div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Which Payment system We support ?
                </div>
                <div className="collapse-content">
                    <p>We accept all debit / credit cards along with the cash system . Best part is we ask you to pay the bill after we finished the work for you . </p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    How to find us ?
                </div>
                <div className="collapse-content">
                    <p>You can find us in all kinds of social networks with the name of SociVEnts .</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    Why only we are the most trus worthy ?
                </div>
                <div className="collapse-content">
                    <p>Because we are in the service providing industry for last 10 with full satisfaction from the customer side . You can realte with our customer recontact rate . 60% of our customers are repeat customer for the best possible service we provide .</p>
                </div>
            </div>
        </div></>
    )
}

export default FAQ
