import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetailPage from "../pages/GameDetailPage";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([{
     path:'/',
     element:<Layout/>,
     errorElement:<Errorpage/>,
     children:[{
        index:true,
        element:<HomePage/>
     },{path:'games/:slug' , element:<GameDetailPage/>}]
}])

export default router

