import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/modules/users/schemas/user.schema';
import { Retaurant } from 'src/modules/restaurants/schemas/retaurant.schema'
import mongoose, { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name }) // định nghĩa mối quan hệ
    user: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Retaurant.name })
    restaurant: mongoose.Schema.Types.ObjectId;

    @Prop()
    rating: string;

    @Prop()
    comment: string;

    @Prop()
    image: string;

    @Prop()
    createdAt: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
