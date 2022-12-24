import { Injectable } from '@nestjs/common';
import { bootstrap } from './main';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    
  }
}
