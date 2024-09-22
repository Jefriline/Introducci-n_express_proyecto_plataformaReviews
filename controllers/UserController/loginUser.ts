import { Request, Response } from "express";
import UserService from "../../services/UserServices/userService";
import Loginuser from "../../Dto/UserDto/loginUserDto";
import generateToken from '../../Helpers/Token/generateToken';

let loginUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password
    } = req.body;

    const login = await UserService.login(new Loginuser(email, password));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({ id: login.id, role: login.role }, process.env.KEY_TOKEN, 10)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }

}

export default loginUser;