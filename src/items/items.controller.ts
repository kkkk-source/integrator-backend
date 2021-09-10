import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { ItemCreateRequestDto } from './dto/item-create-request.dto';
import { ItemPaginatedRequestDto } from './dto/item-paginated-request.dto';
import { ItemPaginatedResponseDto } from './dto/item-paginated-response.dto';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() itemToCreate: ItemCreateRequestDto): Promise<Item> {
    return await this.itemsService.create(itemToCreate as Item);
  }

  @Get()
  async findAll(
    @Query() itemPaginatedRequest: ItemPaginatedRequestDto,
  ): Promise<ItemPaginatedResponseDto> {
    return await this.itemsService.findAll(itemPaginatedRequest);
  }
}
