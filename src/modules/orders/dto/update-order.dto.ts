import { PartialType } from '@nestjs/mapped-types';
import { CreateorderDto } from './create-Order.dto';

export class UpdateorderDto extends PartialType(CreateorderDto) { }