import {Request, Response} from 'express';
import {User} from '@models/User';
export class UsersController {
    constructor(){}
    async getAll(req:Request, res:Response):Promise<{success:boolean; msg:string;items:[]}>{
        return {success:true, msg:'Testing', items:[]};
    }
    async teste():Promise<User>{
        const user = new User();
        return user;
    }
}