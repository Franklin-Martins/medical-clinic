import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medic } from 'src/medics/entities/medic.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ){}
  
  async create(createAppointmentDto: CreateAppointmentDto) {
    return await this.appointmentRepository.save(createAppointmentDto);
  }

  async findAll() {
    return await this.appointmentRepository.find();
  }

  async findOne(id: number) {
    const appointment = await this.appointmentRepository.findOne({id});

    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    let appointment = await this.appointmentRepository.findOne({id});
    console.log(appointment);
    appointment.day = updateAppointmentDto.day;
    appointment.startTime = updateAppointmentDto.startTime;
    appointment.endTime = updateAppointmentDto.endTime;
    appointment.status = updateAppointmentDto.status;

    await this.appointmentRepository.save(appointment);

    return appointment;
  }

  async remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
