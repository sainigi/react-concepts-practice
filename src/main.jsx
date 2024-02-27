import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PasswordGenerator from './components/password-generator/PasswordGenerator';
import LightDark from './components/Home/LightDark';
import MiniContextApi from './components/Home/MiniContextApi';
import TodoMain from './components/ToDoApp/TodoMain';
import ReduxLayout from './redux/todoRedux/ReduxLayout';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Root />,
//     children:[
//       {
//         path:"",
//         element:<Home />,
//         children: [
//           {
//             path: "about",
//             element: <About />
//           },
//         ]
//       }
    
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='password-generator' element={<PasswordGenerator />} />
      <Route path='theme-example' element={<LightDark />} />
      <Route path='login-context' element={<MiniContextApi />} />
      <Route path='todo-app' element={<TodoMain />} />
      <Route path='todo-redux' element={<ReduxLayout />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
