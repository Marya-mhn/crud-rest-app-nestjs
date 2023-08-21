import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://machanemarya20:oiHvTavwhBCn2TRE@ac-jynaay9-shard-00-00.vnw8fte.mongodb.net:27017,ac-jynaay9-shard-00-01.vnw8fte.mongodb.net:27017,ac-jynaay9-shard-00-02.vnw8fte.mongodb.net:27017/?replicaSet=atlas-8ugpl9-shard-0&ssl=true&authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
