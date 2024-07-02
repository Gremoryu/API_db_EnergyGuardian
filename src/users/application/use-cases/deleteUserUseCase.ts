import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class DeleteUserUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(user_id: number): Promise<User | null> {
        try {
            const user = await this.userService.getUserById(user_id);
            if (!user) {
                throw new Error("User not found");
            }

            return await this.userService.deleteUser(user_id);
        }
        catch (error) {
            return null;
        }
    }
}