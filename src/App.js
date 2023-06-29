import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/Layout';
import About from './pages/About';
import LayoutHelp from './pages/LayoutHelp';
import Contact, { contactAction } from './pages/Contact';
import Faq from './pages/Faq';
import NotFound  from './pages/Notfound';
import CareerLayout from './pages/CareerLayout';
import Career from './pages/Career';
import { careersLoader } from './pages/Career';
import CareerDetails from './pages/CareerDetails';
import {careerDetailsLoader} from './pages/CareerDetails';
import CareerError from './pages/CareerError';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path='help' element={<LayoutHelp/>}>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareerLayout />} errorElement={<CareerError/>}>
        <Route
          index
          element={<Career />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
