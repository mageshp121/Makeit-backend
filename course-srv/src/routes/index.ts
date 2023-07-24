import express from "express";
import courseRoutes from './courseRoutes/course.route'

export const routes  =(dependencies:any)=>{
    const routes = express.Router()
    routes.use('/course',courseRoutes(dependencies));
    // routes.use('/lessone',lessoneRoute(dependencies))
    return routes
}



