import { Injectable } from '@nestjs/common';
import Save from './models/Save';
import { Player } from './interfaces/player';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
