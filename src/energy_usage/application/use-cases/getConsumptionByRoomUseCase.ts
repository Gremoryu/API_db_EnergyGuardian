import { Energy } from "../../domain/models/Energy";
import { EnergyService } from "../../domain/services/EnergyService";

export class GetConsumptionByRoomUseCase {
    constructor(private readonly energyService: EnergyService) {}

    async execute(room: number): Promise<Energy[] | null> {
        console.log('Executing use case for room:', room);
        try {
            const energy = await this.energyService.getConsumptionByRoom(room);
            console.log('Energy data received:', energy);
            return energy;
        } catch (error) {
            console.error('Error executing use case:', error);
            return null;
        }
    }
}    