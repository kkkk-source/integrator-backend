import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async create(item: Item): Promise<Item> {
    return await this.itemsRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
