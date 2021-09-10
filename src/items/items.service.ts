import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './entities/item.entity';
import { ItemPaginatedRequestDto } from './dto/item-paginated-request.dto';
import { ItemPaginatedResponseDto } from './dto/item-paginated-response.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async create(item: Item): Promise<Item> {
    return await this.itemsRepository.save(item);
  }

  async findAll(itemPaginatedRequestDto): Promise<ItemPaginatedResponseDto> {
    const page: number = itemPaginatedRequestDto.page;
    const limit: number = itemPaginatedRequestDto.limit;

    const [data, total] = await this.itemsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      limit,
      page,
    } as ItemPaginatedResponseDto;
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
