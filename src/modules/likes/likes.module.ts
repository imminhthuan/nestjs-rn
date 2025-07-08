import { Module } from '@nestjs/common';
import { LikesService } from './Likes.service';
import { LikesController } from './Likes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Like, LikeSchema } from './schemas/Like.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }])],
    controllers: [LikesController],
    providers: [LikesService],
})
export class LikesModule { }
