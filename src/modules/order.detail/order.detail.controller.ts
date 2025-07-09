import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OderDetailsService } from './order.detail.service';
import { CreateOderDetailDto } from './dto/create-order.detail.dto';
import { UpdateOderDetailDto } from './dto/update-order.detail.dto';

@Controller('OderDetails')
export class OderDetailsController {
    constructor(private readonly OderDetailsService: OderDetailsService) { }

    @Post()
    create(@Body() createOderDetailDto: CreateOderDetailDto) {
        return this.OderDetailsService.create(createOderDetailDto);
    }

    @Get()
    findAll() {
        return this.OderDetailsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.OderDetailsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOderDetailDto: UpdateOderDetailDto) {
        return this.OderDetailsService.update(+id, updateOderDetailDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.OderDetailsService.remove(+id);
    }
}
