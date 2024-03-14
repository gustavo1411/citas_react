import React from 'react'

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('deseas eliminar este paciente')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>

        <p className='font-bold mb-3 text-gray-700'>Nombre: {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700'>Propietario: {''}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700'>Email: {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700'>Fecha Alta: {''}
          <span className='font-normal normal-case'>{alta}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700'>Sintomas: {''}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className='flex justify-between mt-10'>
            <button type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => setPaciente(paciente)} //PASO 2: esta funcion envia todo el objeto paciente al app para guardarlo en el state paciente
            >
              Editar
            </button>

            <button type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    // onClick={() => eliminarPaciente(id)} ESTA ES UNA FORMA SI QUEREMOS AGREGAR MAS COSAS A LA FN() LO HACEMOS COMO ABAJO
                    onClick={handleEliminar}
            >
              Eliminar
            </button>

        </div>
    </div>
  )
}
