import { Test } from '@nestjs/testing';
import { AuthModule } from './auth.module';

describe('Auth Module', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
