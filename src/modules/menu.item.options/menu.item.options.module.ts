import { Module } from '@nestjs/common';
import { MenuItemOptionsService } from './menu.item.options.service';
import { MenuItemOptionsController } from './menu.item.options.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItemOption, MenuItemOptionSchema } from './schemas/menu.item.options.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: MenuItemOption.name, schema: MenuItemOptionSchema }])],
    controllers: [MenuItemOptionsController],
    providers: [MenuItemOptionsService],
})
export class MenuItemOptionsModule { }
