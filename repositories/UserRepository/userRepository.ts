import db from '../../config/config-db';
import Loginuser from '../../Dto/UserDto/loginUserDto';
import RegisterUser from '../../Dto/UserDto/registerUserDto';

import bcrypt from 'bcryptjs';

class UserRepository {

  static async add(ru: RegisterUser) {
    const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    const values = [ru.name, ru.email, ru.password];
    return db.execute(sql, values);
  }

  static async login(log: Loginuser) {
    const sql = 'SELECT id, password, role FROM user WHERE email = ?'
    const values = [log.email];
    const result: any = await db.execute(sql, values);
    if (result[0].length > 0) {
      const isPasswordValid = await bcrypt.compare(log.password, result[0][0].password);
      if (isPasswordValid) {
        return { logged: true, status: "Successful authentication", id: result[0][0].id, role: result[0][0].role }
      }
      return { logged: false, status: "Invalid username or password" };
    }
    return {
      logged: false, status: "Invalid username or password"

    };
  }
}

export default UserRepository;