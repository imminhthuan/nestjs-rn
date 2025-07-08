import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuItemsService } from './menu.items.service';
import { CreateMenuItemDto } from './dto/create-menu.item.dto';
import { UpdateMenuItemDto } from './dto/update-menu.item.dto';

@Controller('MenuItems')
export class MenuItemsController {
    constructor(private readonly MenuItemsService: MenuItemsService) { }

    @Post()
    create(@Body() createMenuItemDto: CreateMenuItemDto) {
        return this.MenuItemsService.create(createMenuItemDto);
    }

    @Get()
    findAll() {
        return this.MenuItemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.MenuItemsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMenuItemDto: UpdateMenuItemDto) {
        return this.MenuItemsService.update(+id, updateMenuItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.MenuItemsService.remove(+id);
    }
}
