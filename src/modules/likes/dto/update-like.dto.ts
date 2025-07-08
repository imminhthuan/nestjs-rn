import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from './create-Like.dto';

export class UpdateLikeDto extends PartialType(CreateLikeDto) { }