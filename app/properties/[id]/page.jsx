import PropertyHeaderImage from '@/components/propertyHeaderImage/PropertyHeaderImage.jsx'
import React from 'react'
import connectDB from '@/config/database';
import Property from '@/models/Property';


 const propertyDetails = async({params}) => {
    await connectDB();
    const property = await Property.findById(params.id);
  return (
    <div><PropertyHeaderImage image={property.images[0]}/></div>
  )
}
export default propertyDetails