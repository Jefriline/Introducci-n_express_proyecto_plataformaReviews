import { Request, Response } from "express";
import UserService from "../../services/UserServices/userService";
import RegisterUser from "../../Dto/UserDto/registerUserDto";


let registerUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
    } = req.body;

    const registerUser = await UserService.register(new RegisterUser(name, email, password));

    return res.status(201).json(
      { status: 'User register' }
    );
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}


export default registerUser;
