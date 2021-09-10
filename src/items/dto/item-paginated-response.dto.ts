import { Item } from '../entities/item.entity';

export interface ItemPaginatedResponseDto {
  data: Item[];
  page: number;
  limit: number;
  total: number;
}
