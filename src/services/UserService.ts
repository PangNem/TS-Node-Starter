import User from '../models/User';

export default class UserService {
  createUser (user: { nickname: string; }) {
    return User.create({ nickname: user.nickname });
  }
}
