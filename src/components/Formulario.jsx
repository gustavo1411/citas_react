import { useEffect, useState } from "react"
import { ErrorComponent } from "./ErrorComponent"


export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
      //en este component ya tenemos paciente osea podemos saber si existe paciente.id lo podemos editar de lo contrario se crea una nuevo con nuevo id
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)
  //SI EXISTE UN OBJETO PACIENTE POR ESO SE USA EL USEEFFECT Y SE SETEA EL FORM. CON LOS VALORES DEL OBJ. PACIENTE (EL QUE SE LE APRETO "EDITAR") 
  //LUEGO HAY QUE IDENTIFICAR QUE REGISTRO ES EL QUE ESTAMOS EDITANDO. Y DESPUES AGREGAR EL NUEVO OBJETO CON VALORES ACT. (objetoPaciente) AL STATE 'PACIENTES'
    useEffect(() => {
      if( Object.keys(paciente).length > 0){ //PASO 4: se verifica que el objeto no este vacio y se setea todos los campos del form 
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email) //aca hay que poner el objeto a todos porque sino toma el nombre de las variables del state
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)
      }
    }, [paciente])
    


    const generarId = () => {
      const random = Math.random().toString(36).substr(2)
      const fecha = Date.now().toString(36)

      return random + fecha
     
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion del form
        if([nombre, propietario, email, alta, sintomas].includes('')){
          console.log('se deben completar todos los campos');

          setError(true)
          return;
        }
        setError(false)

        const objetoPaciente = {
          nombre, 
          propietario, 
          email, 
          alta, 
          sintomas //antes el id estaba aca
        }
        
        if(paciente.id){
          //si existe es xq ya hay un paciente con id, entonces estamos editando, si no se le agrega el id abajo cuando agregamos un paciente nuevo
          objetoPaciente.id = paciente.id //le agregamos el id que viene de paciente al objetopaciente que no tiene
          //IMPORTANTE: 
          const pacientesAct = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

          setPacientes(pacientesAct)
          setPaciente({})
          // console.log(objetoPaciente) // este es el objeto actualizado el que seteamos mas arriba
          // console.log(paciente);
        }else{
          //un nuevo registro no tiene id, entonces se le genera uno a objetoPaciente antes de enviarlo al state
          objetoPaciente.id = generarId()
          // AGREGAR UN NUEVO PACIENTE : SE envia el objeto sin mutar el arreglo al app
          setPacientes([...pacientes, objetoPaciente])
        }
        
        //reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-5'>
      <h2 className='font-black text-3xl text-center'>
        seguimiento pacientes
      </h2>
      <p className='text-lg mt-5 text-center mb-5'>
        añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}> 

            {error &&  <ErrorComponent mensaje={'todos los campos son obligatorios'}/> }

          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'>Nombre mascota </label>

            <input id='mascota' type="text"
                placeholder='nombre de la mascota'
                className='w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={(e) => setNombre(e.target.value) }
            />

          </div>

          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>Nombre propietario</label>

            <input id='propietario' type="text"
                placeholder='nombre del propietario'
                className='w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}
            />

          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>Email</label>

            <input id='email' type="email"
                placeholder='email contacto propietario'
                className='w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />

          </div>

          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>Alta</label>

            <input id='alta' type="date"
                className='w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={alta}
                onChange={(e) => setAlta(e.target.value)}
            />

          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>sintomas</label>

            <textarea 
              id='sintomas'
              className='w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='describe los sintomas de tu mascota'
              value={sintomas}
              onChange={(e)=> setSintomas(e.target.value)}
            />

          </div>

          <input type="submit"
                className='bg-indigo-600 w-full p-3 text-white hover:bg-indigo-700 uppercase font-bold mb-10'
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
      </form>
    </div>
  )
}
