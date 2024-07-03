import { CreateUserUseCase } from "../../application/use-cases/createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
        try {
            const user = req.body;
            await this.createUserUseCase.execute(user);
            return res.status(201).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}