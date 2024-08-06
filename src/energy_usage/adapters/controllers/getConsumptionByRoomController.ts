import { Request, Response } from "express";
import { GetConsumptionByRoomUseCase } from "../../application/use-cases/getConsumptionByRoomUseCase";

export class GetConsumptionByRoomController {
    constructor(private readonly getConsumptionByRoomUseCase: GetConsumptionByRoomUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const room = Number(req.params.id);
        
        if (isNaN(room)) {
            console.log('Invalid room_id:', req.params.id);
            return res.status(400).json({ error: "Invalid room_id parameter" });
        }

        console.log('Handling request for room:', room);

        try {
            // Esperar 15 segundos antes de procesar la solicitud
            await new Promise(resolve => setTimeout(resolve, 15000));

            const energy = await this.getConsumptionByRoomUseCase.execute(room);
            if (!energy) {
                console.log('No energy data found for room:', room);
                return res.status(400).json({ error: "Failed to get energy" });
            }

            console.log('Energy data sent to client:', energy);
            return res.status(200).json(energy);
        }
        catch (error) {
            console.error('Internal server error:', error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
