import { PartialType } from '@nestjs/mapped-types';
import { CreateOderDetailDto } from './create-order.detail.dto';

export class UpdateOderDetailDto extends PartialType(CreateOderDetailDto) { }