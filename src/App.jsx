import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter'
import Header from './components/custom/Header';

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
