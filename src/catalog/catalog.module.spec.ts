import { Test } from '@nestjs/testing';
import { CatalogModule } from './catalog.module';

describe('Catalog Module', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [CatalogModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
