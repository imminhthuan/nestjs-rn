import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Retaurant } from 'src/modules/restaurants/schemas/retaurant.schema';

export type LikeDocument = HydratedDocument<Like>;

@Schema({ timestamps: true })
export class Like {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Retaurant.name })
    retaurant: mongoose.Schema.Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
