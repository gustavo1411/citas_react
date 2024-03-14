
import { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { Listadopacientes } from './components/Listadopacientes'

function App() {
  
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})  //PASO 1: este state se usa para editar, se envia al componenete paciente la funcion y se llena este objeto

  //ACA CONSULTAMOS SI HAY ALGO EN EL LOCALSTORAGE. SI HAY LO TRAEMOS
  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLs)

    }
    obtenerLs()
  }, [])
  


  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  //FUNCION PARA ELIMINAR UN PACIENTE, LA DEBEMOS ENVIAR HASTA PACIENTE QUE ES DONDE ESTA EL ID, LUEGO ENCONTRAR CUAL ES EL ID DEL CLICK EN EL STATE Y FILTRAR
  const eliminarPaciente = (id) => {
    //ACA NOS LLEGA EL ID DE PACIENTE, ENTONCES FILTRAMOS EL STATE Y DEVUELVE TODOS LOS QUE SON DISTINTOS DEL DEL ID
    const pacientesAct = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesAct)
    }



  return (
    <div className='container mx-auto mt-20'>
      <Header/>

      <div className='mt-12 md:flex'>

      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes} //le enviamos la funcion setPacientes al form.
        paciente={paciente} // PASO 3:  este objeto es el que se envia al form. para editar 
        setPaciente={setPaciente}
      />
      <Listadopacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
