import React from 'react';

export const ShowIncrement = React.memo(({ handleIncrement }) => {

    console.log('Me volvi a generar');
  return <button
        className='btn btn-primary'
        onClick={ () => {
            handleIncrement(5)
        }}
  >
      increment
  </button>;
});
