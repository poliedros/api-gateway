import { Controller, Get } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import {
  HealthCheckService,
  HealthCheck,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private healthCheckService: HealthCheckService,
    private microserviceHealthCheck: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.healthCheckService.check([
      () =>
        this.microserviceHealthCheck.pingCheck('catalog', {
          transport: Transport.REDIS,
          options: {
            host: `${process.env.REDIS_HOST}`,
            port: process.env.REDIS_PORT,
          },
        }),
    ]);
  }
}
