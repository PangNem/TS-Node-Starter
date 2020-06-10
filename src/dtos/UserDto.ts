import { IsNotEmpty, Length } from 'class-validator';
import { User } from '../entities/User';

export class CreateUserDTO {
  @IsNotEmpty()
  @Length(1, 50)
  nickname: string;

  public toEntity (): User {
    const { nickname } = this;

    const user = new User();

    user.nickname = nickname;
    return user;
  }
}
