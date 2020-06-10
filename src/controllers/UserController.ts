import { UserService } from '../services/UserService';
import { HttpCode, Get, JsonController, Res, Body } from 'routing-controllers';
import { CreateUserDTO } from '../dtos/UserDto';

@JsonController('/user')
export class UserController {
  constructor (private userService: UserService) { }

  @HttpCode(201)
  @Get('/')
  public createUser (@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }
}
