import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuItemOptionsService } from './menu.item.options.service';
import { CreateMenuItemOptionDto } from './dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu.item.option.dto';

@Controller('MenuItemOptions')
export class MenuItemOptionsController {
    constructor(private readonly MenuItemOptionsService: MenuItemOptionsService) { }

    @Post()
    create(@Body() createMenuItemOptionDto: CreateMenuItemOptionDto) {
        return this.MenuItemOptionsService.create(createMenuItemOptionDto);
    }

    @Get()
    findAll() {
        return this.MenuItemOptionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.MenuItemOptionsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
        return this.MenuItemOptionsService.update(+id, updateMenuItemOptionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MenuItemOptionsService.remove(+id);
    }
}
