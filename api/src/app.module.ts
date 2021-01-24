import { Module } from '@nestjs/common';
import FarmController from './controllers/farm.controller';
import HostController from './controllers/multiplayer.controller';
import LocalController from './controllers/local.controller';
import LocalSaveService from './services/localsave.service';
import MultiplayerService from './services/mulitplayer.service';
import FarmService from './services/farm.services';

@Module({
  imports: [],
  controllers: [FarmController, HostController, LocalController],
  providers: [LocalSaveService, MultiplayerService, FarmService],
})
export default class AppModule {}
