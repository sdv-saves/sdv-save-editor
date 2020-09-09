import { Test, TestingModule } from '@nestjs/testing';
import { SaveFileService } from './save-file.service';

describe('SaveFileService', () => {
  let service: SaveFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveFileService],
    }).compile();

    service = module.get<SaveFileService>(SaveFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
