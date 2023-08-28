import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { error } from 'console';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    const port = process.env.PORT || 3003;

    app.listen(port, () => {
      console.log(`Server active on ${port}`);
    });
  } catch {
    console.log(error);
  }
};
start();
