import React, { useEffect } from 'react'
import { Paciente } from './Paciente'

export const Listadopacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){
      // console.log('nuevo paciente');
    }
  
  }, [pacientes])
  

  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

    {
      pacientes && pacientes.length ? (
        <>
        <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
        <p className='text-xl text-center mt-5 mb-5'>Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
        </p>
  
      {
          pacientes.map( paciente =>{   
            return(
              <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente} 
              eliminarPaciente={eliminarPaciente}
              />   
            )
          })
          
        } 
      </>
      ): (
        <>
        <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
        <p className='text-xl text-center mt-5 mb-5'>Comienza agregando pacientes {''}
          <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
        </p>
        </>
      )
    }



    </div>
  )
}
