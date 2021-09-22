import { Module } from '@nestjs/common';
import { RoutingModule } from './routing.module';

@Module({
  imports: [RoutingModule],
})
export class AppModule {}
