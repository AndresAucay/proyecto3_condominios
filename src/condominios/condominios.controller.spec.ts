import { Test, TestingModule } from '@nestjs/testing';
import { CondominiosController } from './condominios.controller';
import { CondominiosService } from './condominios.service';

describe('CondominiosController', () => {
  let controller: CondominiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CondominiosController],
      providers: [CondominiosService],
    }).compile();

    controller = module.get<CondominiosController>(CondominiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
