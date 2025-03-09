'use client';
import Input from '../components/input';
import TextArea from '../components/textarea';
import Button from '../components/button';
import PhoneNumberInput from '../components/PhoneNumberInput';
import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

export default function CreateListing() {

  return (
    <div className="p-5 m-5 max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Phone Number</h3>
        <PhoneNumberInput />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Name</h3>
        <Input
          type="text"
          placeholder="Enter your name"
          className="w-full md:w-96 p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Flat Type / Title</h3>
        <Input
          type="text"
          placeholder="1BHK|2BHK|3BHK"
          className="w-full md:w-96 p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Upload Photos of your Flat</h3>
        <div>
          <ImageUploader />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Address</h3>
        <Input
          type="text"
          className="w-full md:w-96 p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rent per Month</h3>
        <Input
          type="number"
          className="w-full md:w-96 p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Security Deposit</h3>
        <Input
          type="number"
          className="w-full md:w-96 p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">List of Amenities</h3>
        <TextArea
          placeholder="Comma separate every amenity"
          className="w-full p-4 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">List of Restrictions</h3>
        <TextArea
          placeholder="Comma separate every restriction"
          className="w-full p-4 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description (Any additional information)</h3>
        <TextArea
          className="w-full p-4 border rounded-md"
        />
      </div>

      <div >
        <Button className="px-6 py-2 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition-colors">
          List Your Flat
        </Button>
      </div>
    </div>
  );
}