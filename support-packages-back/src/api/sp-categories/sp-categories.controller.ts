import { Controller } from '@nestjs/common';
import { SpCategoriesService } from './sp-categories.service';

@Controller('sp-categories')
export class SpCategoriesController {
  constructor(private readonly spCategoriesService: SpCategoriesService) {}
}
