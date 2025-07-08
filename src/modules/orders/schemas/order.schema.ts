import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/modules/users/schemas/user.schema';
import { Retaurant } from 'src/modules/restaurants/schemas/retaurant.schema';

export type orderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Retaurant.name })
    retaurant: mongoose.Schema.Types.ObjectId;

    @Prop()
    totalPrice: number;

    @Prop()
    status: string;

    @Prop()
    orderTime: Date;

    @Prop()
    deliveryTime: Date;

}

export const OrderSchema = SchemaFactory.createForClass(Order);
