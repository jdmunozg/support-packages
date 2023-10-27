import { Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import { SpSupportPackService } from './sp-support-pack.service';
import {Request,Response} from 'express'

@Controller()
export class SpSupportPackController {
  constructor(private readonly spSupportPackService: SpSupportPackService) {}

  @Get('/all/:app_id')
  async getAllSupportPack(@Req() request: Request, @Res() response: Response,@Param('app_id') app_id) : Promise<any>{
    try{
      const result = await this.spSupportPackService.getAllFiltersByApp(app_id);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result
   })
    }catch(err){
      return response.status(500).json({
        error: err,
       status: 'Ok!',
       message : 'Internal Server Error!'
  })
    }
  }


  @Post('/create')
  async createDowloandTool(@Req() request: Request, @Res() response: Response, @Body() body:any) : Promise<any>{
    try{
      const result = await this.spSupportPackService.createDowloandTool(body);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result
   })
    }catch(err){
      return response.status(500).json({
        error: err,
       status: 'Ok!',
       message : 'Internal Server Error!'
  })
    }
  }
}
