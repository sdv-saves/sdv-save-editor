import { LocalController } from "./local.controller"
import { LocalSaveService } from "../services/localsave.service"
import { Test, TestingModule } from '@nestjs/testing';

describe('LocalController', () => {
  let localController: LocalController;
  let localSaveService: LocalSaveService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocalController],
      providers: [LocalSaveService],
    }).compile();

    localController = app.get<LocalController>(LocalController);
    localSaveService = app.get<LocalSaveService>(LocalSaveService);
  });

  describe('getSaves', () => {
    it("should return an array of save names", async () => {
      const result = ['BridgeFour_270084022'];
      jest.spyOn(localSaveService, 'getSaves').mockImplementation(() => result);

      expect(await localController.getSaves()).toBe(result);
    });
  });
});
