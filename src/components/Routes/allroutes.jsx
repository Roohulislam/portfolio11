import Banner from "../Banner"
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Work from '../Work';
import Home from "../../pages/home";


 
export const allroutes =[

    {path: '/', element: <Home/> },
    {path: '/banner', element: <Banner/>},
    {path:"/about", element: <AboutMe/>},
    {path:"/skills", element: <Skills/>},
    {path:"/projects", element: <Projects/>},
    {path:"/work", element:<Work/>}
]