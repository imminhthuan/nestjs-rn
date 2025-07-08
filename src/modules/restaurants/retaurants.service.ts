import { Injectable } from '@nestjs/common';
import { CreateRetaurantDto } from './dto/create-Retaurant.dto';
import { UpdateRetaurantDto } from './dto/update-Retaurant.dto';

@Injectable()
export class RetaurantsService {
    create(createRetaurantDto: CreateRetaurantDto) {
        return 'This action adds a new Retaurant';
    }

    findAll() {
        return `This action returns all Retaurants`;
    }

    findOne(id: number) {
        return `This action returns a #${id} Retaurant`;
    }

    update(id: number, updateRetaurantDto: UpdateRetaurantDto) {
        return `This action updates a #${id} Retaurant`;
    }

    remove(id: number) {
        return `This action removes a #${id} Retaurant`;
    }
}
