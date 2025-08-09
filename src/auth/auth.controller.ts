import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    //injecting AuthService to handle authentication logic
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup() {
      return {hi: 'I am signed up'};
    }
    
@Post('signin')
    signin() {
        return 'I am signed in';
    }
}