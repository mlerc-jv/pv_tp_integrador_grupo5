import useAutorizaciones from '../hooks/useAutorizaciones'
import Login from './Login'

const Dashboard = () => {
  const { admin } = useAutorizaciones()

  return (
    <div>
      <h1>Panel de Control de Clientes</h1>
      {!admin ? (
        <>
          <h3>Bienvenido al sistema</h3>
          <p>
            Ingrese sus credenciales para acceder.
          </p>
          <Login />
        </>
      ) : (
        <>
          <h2>Dashboard</h2>
          <p>
            Administrador:
            {admin.nombre}
          </p>
          <p>
            Sector:
            {admin.sector}
          </p>
        </>
      )}
    </div>
  )
}

export default Dashboard