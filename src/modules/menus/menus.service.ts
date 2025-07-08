import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-Menu.dto';
import { UpdateMenuDto } from './dto/update-Menu.dto';

@Injectable()
export class MenusService {
    create(createMenuDto: CreateMenuDto) {
        return 'This action adds a new Menu';
    }

    findAll() {
        return `This action returns all Menus`;
    }

    findOne(id: number) {
        return `This action returns a #${id} Menu`;
    }

    update(id: number, updateMenuDto: UpdateMenuDto) {
        return `This action updates a #${id} Menu`;
    }

    remove(id: number) {
        return `This action removes a #${id} Menu`;
    }
}
