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
      where:{
        email: createMedicDto.email
      }
    })

    if(medic) return medic;

    return await this.medicRepository.save(createMedicDto);
  }

  async findAll() {
    return await this.medicRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} medic`;
  }

  update(id: number, updateMedicDto: UpdateMedicDto) {
    return `This action updates a #${id} medic`;
  }

  remove(id: number) {
    return `This action removes a #${id} medic`;
  }
}
