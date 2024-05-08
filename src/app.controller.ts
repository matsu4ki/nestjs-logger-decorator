import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Logging } from './decorators/logging.decorator';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  @Logging(new Logger())
  getHelloController(): string {
    this.logger.log('Hello from the controller');
    return this.appService.getHelloService();
  }
}
