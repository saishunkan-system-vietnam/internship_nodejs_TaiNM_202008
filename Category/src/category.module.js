import { Module } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}