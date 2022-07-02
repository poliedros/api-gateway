import { Test } from '@nestjs/testing';
import { UsersModule } from './users.module';

describe('Health Module', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
