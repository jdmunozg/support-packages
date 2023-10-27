import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.services';

@Injectable()
export class SpGuidelinesService {
    constructor(private prisma: PrismaService){}
    

    async getAllGuidelines(app_id):Promise<any>{
        try {
            const guiades:any = await this.prisma.$queryRaw(Prisma.sql`
            select  sg.id, sg.name, sg.source, sg.contact, sgm.description, sgm.target_scale,
            sgm.integrates_gender, sgm.participants, sgm.methods, sgm.input_types, sgm.expected_outputs,
            sgm.human_resources,sgm.estimated_time,sgm.strengths,sgm.limitations, sgm.key_references,
            sil.importance_level, sr.name as 'role_name', sc.name as 'cate_name', ss.name as 'staga_name',
            concat(sg.id,sil.category_id, sil.stage_id, sil.role_id) as code, sil.category_id as 'id_cat', 
            sil.role_id as 'id_rol', sil.stage_id as 'id_stage'
            from sp_guidelines sg 
        join sp_guidelines_metadata sgm on sgm.guideline_id = sg.id
        join sp_importance_levels sil on sil.guideline_id = sg.id
        join sp_roles sr on sr.id = sil.role_id 
        join sp_categories sc on sc.id = sil.category_id 
        join sp_stages ss on ss.id = sil.stage_id 
        where sg.app_id = ${app_id} and sg.active > 0;
            `);
        if (guiades.length > 0) {
            
            const guidelinesIds = guiades.map((g: any) => g.id);
            
            const resources_guidelines:any = await this.prisma.$queryRaw(Prisma.sql`SELECT * FROM sp_resources_guidelines
            WHERE guideline_id IN (${guidelinesIds.join(', ')})`);
            for (let i = 0; i < guiades.length; i++) {
                const guideline_id = guiades[i].id;
                guiades[i].resources = resources_guidelines.filter(
                  (r) => r.guideline_id == guideline_id,
                );
              }
        }
            
        return guiades;
        } catch (error) {
            return error;
        }
    }
}
