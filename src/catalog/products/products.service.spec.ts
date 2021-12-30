import { ClientProxy } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: 'CATALOG_SERVICE',
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
