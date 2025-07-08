import { Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu.item.dto';
import { UpdateMenuItemDto } from './dto/update-menu.item.dto';

@Injectable()
export class MenuItemsService {
    create(createMenuItemDto: CreateMenuItemDto) {
        return 'This action adds a new MenuItem';
    }

    findAll() {
        return `This action returns all MenuItems`;
    }

    findOne(id: number) {
        return `This action returns a #${id} MenuItem`;
    }

    update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
        return `This action updates a #${id} MenuItem`;
    }

    remove(id: number) {
        return `This action removes a #${id} MenuItem`;
    }
}
