import { Module } from '@nestjs/common';
import { MenusService } from './Menus.service';
import { MenusController } from './Menus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './schemas/menu.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
    controllers: [MenusController],
    providers: [MenusService],
})
export class MenusModule { }
