import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { MenuItem } from 'src/modules/menu.items/schemas/menu.item.schema';

export type MenuItemOptionDocument = HydratedDocument<MenuItemOption>;

@Schema({ timestamps: true })
export class MenuItemOption {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MenuItem.name })
    menuitem: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    additionalPrice: number;

    @Prop()
    optionalDescription: string;
}

export const MenuItemOptionSchema = SchemaFactory.createForClass(MenuItemOption);
