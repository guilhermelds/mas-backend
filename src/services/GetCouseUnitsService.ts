import { getRepository } from "typeorm"
import { CourseUnit } from "../model/CourseUnit"

interface UserId {
    id?: string;
}

class GetCouseUnitsService {

    public async execute({id}:UserId){

        const courseunitRepository = getRepository(CourseUnit);

        const courseunit = courseunitRepository.find();

        if(!courseunit){
            return{
                message:'course units not found'
            } 
        }
        return courseunit;
    }

}

export {GetCouseUnitsService}