import React from 'react';
import AddForm from '../UI/AddForm';
import Map from '../UI/Map';

export default function AddPage() {
  return (
    <div className="justify-content-between">
      <AddForm />
      <Map />
    </div>
  );
}
