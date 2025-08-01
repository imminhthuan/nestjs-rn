import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
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

  @Prop({ default: "LOCAL" })
  accountType: string;

  @Prop({ default: "USERS" })
  role: string;

  @Prop({ default: false })
  isActive: Boolean;

  @Prop()
  codeId: string;

  @Prop()
  codeExpired: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
