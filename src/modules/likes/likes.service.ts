import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-Like.dto';
import { UpdateLikeDto } from './dto/update-Like.dto';

@Injectable()
export class LikesService {
    create(createLikeDto: CreateLikeDto) {
        return 'This action adds a new Like';
    }

    findAll() {
        return `This action returns all Likes`;
    }

    findOne(id: number) {
        return `This action returns a #${id} Like`;
    }

    update(id: number, updateLikeDto: UpdateLikeDto) {
        return `This action updates a #${id} Like`;
    }

    remove(id: number) {
        return `This action removes a #${id} Like`;
    }
}
