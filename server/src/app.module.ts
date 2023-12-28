import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';

@Module({
  imports: [ControllersModule, ServicesModule, RepositoriesModule],
})
export class AppModule {}
