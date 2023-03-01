import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTE_PATH } from './mobile/routes/routes';
import Exhibition from './mobile/components/exhibition/Exhibition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.EXHIBITION} element={<Exhibition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
