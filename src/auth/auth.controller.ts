import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDto } from 'src/dtos/auth-user.dto';
import { UserDto } from 'src/dtos/user.dto';
import { Serialize } from 'src/interceptors/users.interceptor';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() body: AuthUserDto) {
    const user = await this.authService.registerWithEmailAndPassword(
      body.email,
      body.password,
    );
    return user;
  }

  @Post('/login')
  async loginUser(@Body() body: AuthUserDto) {
    const user = await this.authService.signInWithEmailAndPassword(
      body.email,
      body.password,
    );
    return user;
  }
}
