import { Controller, Request, Post, UseGuards, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService){}

  @Get('/')
  message(@Request() req){
    return {message: "Hello world"}
  }

  @Post('auth/login')
  async login(@Request() req) {
    const user = await this.authService.login(req.body);
    if(!user) throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return {message: 'Rota protegida'}
  }
}