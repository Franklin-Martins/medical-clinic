import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import config from './config/dbconfig'
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MedicsModule } from './medics/medics.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config(__dirname)),
    AuthModule,
    MedicsModule,
    AppointmentsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
