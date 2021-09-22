import { NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

export class RoutingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res) => res.send('hit path /'))
      .forRoutes({ path: '/', method: RequestMethod.GET })
      .apply((req, res) => res.send('hit path /about'))
      .forRoutes({ path: '/about', method: RequestMethod.GET });
  }
}
