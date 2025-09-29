import React from 'react'
import PropertyCard from '@/components/propertyCard/PropertyCard.jsx';
import properties from '@/properties.json';
import Link from 'next/link';

export default function HomeProperties() {

    const recentProperties = properties.slice(0,3);

  return (
    <>
         <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
            <h1 className='text-2xl mb-4'>Browse Properties</h1>
            {recentProperties.length === 0 ? (
                <p>No properties found</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {recentProperties.map((property, index) => (
                    <PropertyCard property={property} key={index} />
                ))}
                </div>
            )}
            </div>
        </section>
        <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}
