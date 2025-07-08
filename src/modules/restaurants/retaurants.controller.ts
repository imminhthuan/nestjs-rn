import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RetaurantsService } from './retaurants.service';
import { CreateRetaurantDto } from './dto/create-Retaurant.dto';
import { UpdateRetaurantDto } from './dto/update-Retaurant.dto';

@Controller('Retaurants')
export class RetaurantsController {
    constructor(private readonly RetaurantsService: RetaurantsService) { }

    @Post()
    create(@Body() createRetaurantDto: CreateRetaurantDto) {
        return this.RetaurantsService.create(createRetaurantDto);
    }

    @Get()
    findAll() {
        return this.RetaurantsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.RetaurantsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRetaurantDto: UpdateRetaurantDto) {
        return this.RetaurantsService.update(+id, updateRetaurantDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.RetaurantsService.remove(+id);
    }
}
