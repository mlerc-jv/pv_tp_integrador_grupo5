import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AppRoutes from './routes/routes'
import useAutorizaciones from './hooks/useAutorizaciones'

function App() {

const { admin } = useAutorizaciones()

return (
<>
    {admin && <Header />}
      {admin && <Nav />}

    <AppRoutes />

    {admin && <Footer />}
</>

)
}
export default App
