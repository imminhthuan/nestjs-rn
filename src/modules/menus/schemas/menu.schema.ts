import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Retaurant } from 'src/modules/restaurants/schemas/retaurant.schema';

export type MenuDocument = HydratedDocument<Menu>;

@Schema({ timestamps: true })
export class Menu {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Retaurant.name})
    retaurant: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
