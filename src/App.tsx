import './App.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './router/Routes';




const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  );
};
export default App
