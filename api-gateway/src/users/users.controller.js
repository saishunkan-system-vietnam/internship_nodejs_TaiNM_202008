import {
    Controller,
    Dependencies,
    Post,
    Req,
    Bind,
    Put,
    Param,
    Get,
    Delete
} from '@nestjs/common';
import {
    UsersService
} from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    @Get()
    @Bind(Req())
    async findAll(req) {
        // console.log(req.session);
        // console.log(req.sessionID);
        // req.session.Users = this.usersService.findAll();
        if (!req.session.user) {
            return {
                "mess": "error"
            }
        } else if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        } else {
            return this.usersService.findAll(req.session);
        }
    }

    @Get(':id')
    @Bind(Param(), Req())
    async findById(params, req) {
        if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        } else {
            return this.usersService.findById(params.id);
        }
        // console.log(params.id)

    }

    @Post()
    @Bind(Req())
    async insertUser(req) {
        console.log(req.body);
        if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        } else {
            return this.usersService.insertUser(req.body);
        }

    }

    @Put(':id')
    @Bind(Req())
    async updateUser(req) {
        if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        } else {
            return this.usersService.updateUser(req.body.data);
        }

    }

    @Delete(':id')
    @Bind(Param(), Req())
    async removeUsers(params, req) {
        if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        } else {
            return this.usersService.deleteUser(params.id);
        }

    }

    @Post('logout')
    @Bind(Req())
    async logout(req) {
        return req.session.user = null;
    }

    @Post('login')
    @Bind(Req())
    async login(req) {
        console.log(req.body);
        try {
            let email = req.body.email;
            // let password = await this.usersService.bcryptPass(req.body.password);
            let password = req.body.password;
            let session = req.session;
            let result = await this.usersService.loginUser(email, password, session);
            // console.log(req)
            return {
                "mess": "success",
                "data": result
            }
        } catch (error) {
            req.session.user = null;
            console.log(error);
            return {
                "mess": "error"
            }
        }
    }

    // @Post('register')
    // @Bind(Req())
    // async logout(req){
    //     return this.usersService.register(req.body);
    // }

}