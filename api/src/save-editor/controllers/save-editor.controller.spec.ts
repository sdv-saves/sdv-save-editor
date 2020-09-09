import { Test, TestingModule } from '@nestjs/testing';
import { SaveEditorController } from './save-editor.controller';

describe('SaveEditor Controller', () => {
  let controller: SaveEditorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaveEditorController],
    }).compile();

    controller = module.get<SaveEditorController>(SaveEditorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
