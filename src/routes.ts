import {Router, Request, Response, response} from 'express';
import { ActivyController } from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';


const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();
const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', activyController.create);
routes.post('/courseuunit', courseUnitController.create);

export default routes;