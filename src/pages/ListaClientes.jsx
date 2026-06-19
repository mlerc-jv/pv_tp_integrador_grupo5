import { useEffect, useState } from "react";
import FormCliente from "../components/FormCliente";

const ListaClientes = () => {

    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {

        fetch("https://fakestoreapi.com/users")
            .then(res => res.json())
            .then(data => setClientes(data));

    }, []);

    const clientesFiltrados = clientes.filter(cliente =>
        cliente.name.lastname
            .toLowerCase()
            .includes(busqueda.toLowerCase())
        ||
        cliente.address.city
            .toLowerCase()
            .includes(busqueda.toLowerCase())
    );

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
                    </tr>
                </thead>

                <tbody>
                    {
                        clientesFiltrados.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>

                                <td>
                                    {cliente.name.firstname}{" "}
                                    {cliente.name.lastname}
                                </td>

                                <td>{cliente.email}</td>

                                <td>{cliente.phone}</td>

                                <td>{cliente.address.city}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
};

export default ListaClientes;