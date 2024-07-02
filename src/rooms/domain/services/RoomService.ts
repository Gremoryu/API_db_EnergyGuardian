import { Room } from "../models/Room";

export interface RoomService {
    createRoom(room: Room): Promise<Room>;
    getRoom(room_id: number): Promise<Room>;
    getRooms(): Promise<Room[]>;
    updateRoom(room: Room): Promise<Room>;
    deleteRoom(room_id: number): Promise<boolean>;
}