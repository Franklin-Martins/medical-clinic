import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicDto } from './dto/create-medic.dto';
import { UpdateMedicDto } from './dto/update-medic.dto';
import { Medic } from './entities/medic.entity';

@Injectable()
export class MedicsService {
  constructor(
    @InjectRepository(Medic)
    private medicRepository: Repository<Medic>
  ){}

  async create(createMedicDto: CreateMedicDto) {
    const medic = await this.medicRepository.findOne({
      email: createMedicDto.email
    })

    if(medic) return medic;

    return await this.medicRepository.save(createMedicDto);
  }

  async findAll() {
    return await this.medicRepository.find();
  }

  async findOne(id: number) {
    return await this.medicRepository.findOne({id});
  }

  async findByEmail(email: string) {
    return await this.medicRepository.findOne({email});
  }

  async update(id: number, updateMedicDto: UpdateMedicDto) {
    let medicToUpdate = await this.medicRepository.findOne({ id });

    medicToUpdate.email = updateMedicDto.email;
    medicToUpdate.name = updateMedicDto.name;
    medicToUpdate.password = updateMedicDto.password;

    await this.medicRepository.save(medicToUpdate);

    return medicToUpdate;
  }

  async remove(id: number) {
    let userToDelete = await this.medicRepository.findOne({ id });

    let statusDeleted = await this.medicRepository.remove(userToDelete);

    return statusDeleted;
  }
}
