import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>
  ){}
  
  async create(createAppointmentDto: CreateAppointmentDto) {
    return await this.appointmentRepository.save(createAppointmentDto);
  }

  async findAll() {
    return await this.appointmentRepository.find();
  }

  async findOne(id: number) {
    const appointment = await this.appointmentRepository.findOne({
      where: { id }
    });

    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
