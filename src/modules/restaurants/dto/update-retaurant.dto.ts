import { PartialType } from '@nestjs/mapped-types';
import { CreateRetaurantDto } from './create-retaurant.dto';

export class UpdateRetaurantDto extends PartialType(CreateRetaurantDto) { }