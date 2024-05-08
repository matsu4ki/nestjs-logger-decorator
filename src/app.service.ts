import { Injectable, Logger } from '@nestjs/common';
import { Logging } from './decorators/logging.decorator';

@Injectable()
export class AppService {
  @Logging(new Logger())
  getHelloService(): string {
    return 'Hello World!';
  }
}
