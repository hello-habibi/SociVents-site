import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (

        <>
            <h2 className='text-center text-4xl font-semibold py-4 border-b-2 border-blue-400 mb-4 text-white'> Services </h2>
            <div className='md:grid md:grid-cols-3 lg:grid-cols-6 gap-3'>
                    <ServiceCard ></ServiceCard>
                    <ServiceCard ></ServiceCard>
                    <ServiceCard ></ServiceCard>
                    <ServiceCard ></ServiceCard>
                    <ServiceCard ></ServiceCard>
                    <ServiceCard ></ServiceCard>
            </div></>
    )
}

export default Services
