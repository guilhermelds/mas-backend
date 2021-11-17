import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCouseUnitsService } from '../services/GetCouseUnitsService';



class CourseUnitController  {
    async create(request:Request, response:Response){


        const courseUnitData = request.body

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);

    }
    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCouseUnitsService();

        const coursesUnits = await getCoursesUnits.execute(userId);
        console.log(coursesUnits);
        return response.json(coursesUnits);
        
    }
}

export {CourseUnitController}