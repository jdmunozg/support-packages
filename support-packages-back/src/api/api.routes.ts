import { Routes } from "@nestjs/core";
import { SpUsersModule } from "./sp-users/sp-users.module";
import { SpRolesModule } from "./sp-roles/sp-roles.module";
import { SpAppsModule } from "./sp-apps/sp-apps.module";

export const ModulesRoutes: Routes = [
    {
      path: 'users',
      module: SpUsersModule,
    },

    {
      path: 'roles',
      module: SpRolesModule,
    },

    {
      path: 'apps',
      module: SpAppsModule,
    },
]