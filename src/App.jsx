import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter'

  function App() {

    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    )
  }

export default App
