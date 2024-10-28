import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

}
