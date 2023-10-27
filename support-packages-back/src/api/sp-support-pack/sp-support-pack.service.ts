import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.services';



@Injectable()
export class SpSupportPackService {
  constructor(private prisma: PrismaService){}

  async getAllFiltersByApp(app_ids):Promise<any>{
      try {
        console.log(app_ids);
        
          const stage = await this.prisma.sp_stages.findMany({where: {app_id: parseInt(app_ids)}});
          const categories = await this.prisma.sp_categories.findMany({where: {app_id: parseInt(app_ids)}});
          const roles = await this.prisma.sp_roles.findMany({where: {app_id: parseInt(app_ids)}});
        return {
          stage,
          categories,
          roles
        }
      } catch (error) {
        console.log(error);
        
        return error;
      }
  }

  async createDowloandTool(data:any):Promise<any>{
    console.log(data);
    
    try {
      const result = [];
      data.forEach(async element => {
        result.push(await this.prisma.sp_guide_download.create({
          data: {
            guiade_id: parseInt(element.id),
            email: element.email,
          }
        }))
      });
      return result;
    } catch (error) {
      console.log(error);
      
      return error;
    }
  }
}
