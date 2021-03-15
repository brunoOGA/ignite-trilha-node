import  {Request, Response} from 'express';
import CreateCourseService from './CreateCouserService';

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJs", 
        educator: "Dani",
        duration: 10, 
    });

    return response.send();
}