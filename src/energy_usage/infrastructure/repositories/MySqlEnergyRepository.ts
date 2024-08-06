import { db } from "../../../database/db";
import { EnergyService } from "../../domain/services/EnergyService";
import { Energy } from "../../domain/models/Energy";

export class MySqlEnergyRepository implements EnergyService {
    async createEnergy(energy: Energy): Promise<Energy | null> {
        const query = "INSERT INTO energy_usage (room_id, consumption, voltage, current, power_factor, movement) VALUES (?, ?, ?, ?, ?, ?)";
        const [result]: any = await db.query(query, [
            energy.room_id, 
            energy.consumption, 
            energy.voltage, 
            energy.current, 
            energy.power_factor, 
            energy.movement
        ]);
        
        if (result.affectedRows === 0) {
            return null;
        }

        return energy;
    }

    async getConsumptionByRoom(room_id: number): Promise<Energy[] | null> {
        console.log('Fetching energy data for room_id:', room_id);
        const query = "SELECT consumption, voltage, current, power_factor, timestamp, movement FROM energy_usage WHERE room_id = ?";
        try {
            const [rows]: any = await db.query(query, [room_id]);
            console.log('Query result:', rows);
            if (rows.length === 0) {
                console.log('No data found for room_id:', room_id);
                return null;
            }
            return rows;
        } catch (error) {
            console.error('Error querying database:', error);
            return null;
        }
    }

    async getConsumptionByDate(room_id: number, start_date: Date, end_date: Date): Promise<Energy[] | null> {
        const query = "SELECT comsumption, voltage, current, power_factor, timestamp, movement WHERE room_id = ? AND timestamp BETWEEN ? AND ?";
        const [rows]:any = await db.query(query, [room_id, start_date, end_date]);
        if (rows.length === 0) {
            return null;
        }
        return rows;
    }
}