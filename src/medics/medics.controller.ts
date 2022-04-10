import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicsService } from './medics.service';
import { CreateMedicDto } from './dto/create-medic.dto';
import { UpdateMedicDto } from './dto/update-medic.dto';

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}

  @Post()
  create(@Body() createMedicDto: CreateMedicDto) {
    return this.medicsService.create(createMedicDto);
  }

  @Get()
  findAll() {
    return this.medicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicDto: UpdateMedicDto) {
    return this.medicsService.update(+id, updateMedicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicsService.remove(+id);
  }
}
