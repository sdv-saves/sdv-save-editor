import { Module } from '@nestjs/common';
import { SaveEditorModule } from './save-editor/save-editor.module';

@Module({
  imports: [SaveEditorModule]
})
export class AppModule {}
