import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RetaurantDocument = HydratedDocument<Retaurant>;

@Schema({ timestamps: true })
export class Retaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: number;

  @Prop()
  rating: string;
}

export const RetaurantSchema = SchemaFactory.createForClass(Retaurant);
