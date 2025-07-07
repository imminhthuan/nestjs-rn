import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: number;

  @Prop()
  address: string;

  @Prop()
  image: string;

  @Prop()
  accountType: string;

  @Prop()
  role: string;

  @Prop()
  isActive: string;

  @Prop()
  codeId: string;

  @Prop()
  codeExpired: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
