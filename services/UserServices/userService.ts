import authRepository from '../../repositories/UserRepository/userRepository';
import Loginuser from '../../Dto/UserDto/loginUserDto';
import RegisterUser from '../../Dto/UserDto/registerUserDto';
import generateHash from '../../Helpers/Hash/generateHash';
import UserRepository from '../../repositories/UserRepository/userRepository';


class UserService {

    
    static async register(ru: RegisterUser) {
        ru.password = await generateHash(ru.password);
        return await authRepository.add(ru);
    }

    static async login(log: Loginuser) {
        return await UserRepository.login(log);
    }
}

export default UserService;