import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAutorizaciones from '../hooks/useAutorizaciones'

const Login = () => {
  const [nombre, setNombre] = useState('')
  const [sector, setSector] = useState('')
  const { setAdmin } = useAutorizaciones()
  const navigate = useNavigate()

  const manejarSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !sector) {
      alert('Complete todos los campos')
      return
    }
    setAdmin({
      nombre,
      sector
    })
    console.log({
      nombre,
      sector
    })
    navigate('/')
  }
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={manejarSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br /><br />
        <label>Sector:</label>
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="">Seleccione un sector</option>
          <option value="Soporte">Soporte</option>
          <option value="Gerencia">Gerencia</option>
        </select>
        <br /><br />
        <button type="submit">
          Ingresar
        </button>
      </form>
    </div>
  )
}
export default Login