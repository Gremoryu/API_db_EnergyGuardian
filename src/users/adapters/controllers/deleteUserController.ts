import { DeleteUserUseCase } from "../../application/use-cases/deleteUserUseCase";
import { Request, Response } from "express";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response) {
        try {
            const user_id = parseInt(req.params.id);
            await this.deleteUserUseCase.execute(user_id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}