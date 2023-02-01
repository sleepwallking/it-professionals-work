import Layout from './components/Layout';
import './styles/styles.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Vacanciespage from './pages/Vacanciespage';
import Resumepage from './pages/Resumepage';
import Aboutpage from './pages/Aboutpage';

import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="vacancies" element={<Vacanciespage/>}/>
      <Route path="resume" element={<Resumepage/>}/>
      <Route path="about" element={<Aboutpage/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
