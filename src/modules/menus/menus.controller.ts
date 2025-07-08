import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusService } from './Menus.service';
import { CreateMenuDto } from './dto/create-Menu.dto';
import { UpdateMenuDto } from './dto/update-Menu.dto';

@Controller('Menus')
export class MenusController {
    constructor(private readonly MenusService: MenusService) { }

    @Post()
    create(@Body() createMenuDto: CreateMenuDto) {
        return this.MenusService.create(createMenuDto);
    }

    @Get()
    findAll() {
        return this.MenusService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.MenusService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
        return this.MenusService.update(+id, updateMenuDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MenusService.remove(+id);
    }
}
