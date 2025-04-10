import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Spinner = () => {
  return (
    <div
      className={`flex justify-center items-center h-[500px]`}>
      <div className={`w-[100px] h-[100px] spinner-border text-primary`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
