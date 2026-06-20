import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormCliente from "../components/FormCliente";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener clientes");
        }
        return res.json();
      })
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.name.lastname
        .toLowerCase()
        .includes(busqueda.toLowerCase()) ||
      cliente.address.city
        .toLowerCase()
        .includes(busqueda.toLowerCase())
  );

  if (loading) {
    return <h2>Cargando clientes...</h2>;
  }

  if (error) {
    return <h2>Error al cargar los clientes.</h2>;
  }

  return (
    <div>
      <h1>Clientes</h1>

      <FormCliente />
      <hr />

      <input
        type="text"
        placeholder="Buscar por apellido o ciudad"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>

              <td>
                {cliente.name.firstname} {cliente.name.lastname}
              </td>

              <td>{cliente.email}</td>

              <td>{cliente.phone}</td>

              <td>{cliente.address.city}</td>

              <td>
                <Link to={`/clientes/${cliente.id}`}>
                  Ver Ficha Completa
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaClientes;