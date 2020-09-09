import { Module } from '@nestjs/common';
import { SaveEditorController } from './controllers/save-editor.controller';
import { SaveFileService } from './services/save-file.service';

@Module({
  controllers: [SaveEditorController],
  providers: [SaveFileService]
})
export class SaveEditorModule {}
