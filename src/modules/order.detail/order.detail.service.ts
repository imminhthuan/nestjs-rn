import { Injectable } from '@nestjs/common';
import { CreateOderDetailDto } from './dto/create-order.detail.dto';
import { UpdateOderDetailDto } from './dto/update-order.detail.dto';

@Injectable()
export class OderDetailsService {
    create(createOderDetailDto: CreateOderDetailDto) {
        return 'This action adds a new OderDetail';
    }

    findAll() {
        return `This action returns all OderDetails`;
    }

    findOne(id: number) {
        return `This action returns a #${id} OderDetail`;
    }

    update(id: number, updateOderDetailDto: UpdateOderDetailDto) {
        return `This action updates a #${id} OderDetail`;
    }

    remove(id: number) {
        return `This action removes a #${id} OderDetail`;
    }
}
