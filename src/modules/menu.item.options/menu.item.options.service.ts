import { Injectable } from '@nestjs/common';
import { CreateMenuItemOptionDto } from './dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu.item.option.dto';

@Injectable()
export class MenuItemOptionsService {
    create(createMenuItemOptionDto: CreateMenuItemOptionDto) {
        return 'This action adds a new MenuItemOption';
    }

    findAll() {
        return `This action returns all MenuItemOptions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} MenuItemOption`;
    }

    update(id: number, updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
        return `This action updates a #${id} MenuItemOption`;
    }

    remove(id: number) {
        return `This action removes a #${id} MenuItemOption`;
    }
}
