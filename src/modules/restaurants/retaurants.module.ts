import { Module } from '@nestjs/common';
import { RetaurantsService } from './retaurants.service';
import { RetaurantsController } from './retaurants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Retaurant, RetaurantSchema } from './schemas/retaurant.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Retaurant.name, schema: RetaurantSchema }])],
    controllers: [RetaurantsController],
    providers: [RetaurantsService],
})
export class RetaurantsModule { }
