import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class CreateUserUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(user: User): Promise<User | null> {
        try {
            const UserExists = await this.userService.getUserByUsername(user.username);
            if (UserExists) {
                throw new Error("User already exists");
            }

            return  await this.userService.createUser(user);
        }
        catch (error) {
            return null;
        }
    }
}