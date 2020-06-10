import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserDTO } from '../dtos/UserDto';
import { User } from '../entities/User';

@Service()
export class UserService {
  constructor (
    @InjectRepository()
    private userRepository: UserRepository
  ) { }

  public async createUser (createUserDto: CreateUserDTO): Promise<User> {
    const user = createUserDto.toEntity();
    const newUser = await this.userRepository.save(user);

    return newUser;
  }
}
