import { Module } from '@nestjs/common';
import FarmController from './controllers/farm.controller';
import { HostController } from './controllers/host.controller';
import LocalController from './controllers/local.controller';
import LocalSaveService from './services/localsave.service';
import { SaveGameService } from './services/savegame.service';

@Module({
  imports: [],
  controllers: [FarmController, HostController, LocalController],
  providers: [LocalSaveService, SaveGameService],
})
export class AppModule {}
