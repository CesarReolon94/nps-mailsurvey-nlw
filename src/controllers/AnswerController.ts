import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveyUser } from '../models/SurveyUser';
import { SurveysUsersRepository } from "../repositories/SurverysUsersRepository";


class AnswerController {

    //http://localhost:3333/answers/4?u=0fc05904-2b91-4419-96b5-b49851984aa0
    /**
     * 
     * Route Params => Parametros que compõe a rota 
     * routes.get("/answers/:value")
     * 
     * Query Params => Busca, Paginação, não obrigatórios
     * ?
     * chave=valor
     */

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if (!surveyUser) {
            throw new AppError("Survey user does not exists!")
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}


export { AnswerController }