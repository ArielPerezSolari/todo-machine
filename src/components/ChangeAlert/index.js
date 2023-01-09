import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ synchronize }) {
    const {show, toggleShow} = useStorageListener(synchronize)

  if (show) {
    return (
      <div>
        <p>Hubo hubo cambios</p>
        <button
            className='rounded-full bg-slate-200 p-2 border-2 border-lime-900'
          onClick={toggleShow}
        >
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}



export { ChangeAlert };