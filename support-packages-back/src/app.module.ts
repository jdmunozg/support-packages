import { Module } from '@nestjs/common';
import { MainRoutes } from './main.routes';
import { RouterModule } from '@nestjs/core';
import { SpUsersModule } from './api/sp-users/sp-users.module';
import { SpRolesModule } from './api/sp-roles/sp-roles.module';
import { SpAppsModule } from './api/sp-apps/sp-apps.module';
import { SpCategoriesModule } from './api/sp-categories/sp-categories.module';


@Module({
  imports: [RouterModule.register(MainRoutes),SpUsersModule, SpRolesModule, SpAppsModule, SpCategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
