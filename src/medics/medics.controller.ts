import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { MedicsService } from './medics.service';
import { CreateMedicDto } from './dto/create-medic.dto';
import { UpdateMedicDto } from './dto/update-medic.dto';

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}

  @Post()
  async create(@Body() createMedicDto: CreateMedicDto) {
    return await this.medicsService.create(createMedicDto);
  }

  @Get()
  async findAll() {
    const medics = await this.medicsService.findAll();

    if(!medics) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND)

    return medics;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.medicsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMedicDto: UpdateMedicDto) {
    return await this.medicsService.update(+id, updateMedicDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.medicsService.remove(+id);
  }
}
