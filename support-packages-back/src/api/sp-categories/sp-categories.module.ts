import { Module } from '@nestjs/common';
import { SpCategoriesService } from './sp-categories.service';
import { SpCategoriesController } from './sp-categories.controller';

@Module({
  controllers: [SpCategoriesController],
  providers: [SpCategoriesService],
})
export class SpCategoriesModule {}
