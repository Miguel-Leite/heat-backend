import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {

    async handle (request: Request, response: Response) {

        const { code } = request.body;

        try {
            const service = new AuthenticateUserService();
            const result = await service.execute(code);
            return response.json(result)
        } catch (err) {
            return response.json({error: err.message})
        }
    }

}

export { AuthenticateUserController }