import { Test } from '@nestjs/testing';
import { HealthModule } from './health.module';

describe('Health Module', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
