
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1425px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
