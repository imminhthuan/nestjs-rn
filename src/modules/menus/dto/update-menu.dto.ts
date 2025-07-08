import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-Menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) { }