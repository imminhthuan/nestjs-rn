import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesService } from './Likes.service';
import { CreateLikeDto } from './dto/create-Like.dto';
import { UpdateLikeDto } from './dto/update-Like.dto';

@Controller('Likes')
export class LikesController {
    constructor(private readonly LikesService: LikesService) { }

    @Post()
    create(@Body() createLikeDto: CreateLikeDto) {
        return this.LikesService.create(createLikeDto);
    }

    @Get()
    findAll() {
        return this.LikesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.LikesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
        return this.LikesService.update(+id, updateLikeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.LikesService.remove(+id);
    }
}
