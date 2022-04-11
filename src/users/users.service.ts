import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) 
  private userRepository: Repository<User>)  
  {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where:{
        email: createUserDto.email
      }
    });

    if(user) return user;

    return await this.userRepository.save(createUserDto);
  }

  async findAll():Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({id})
    
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({email})
    
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let userToUpdate = await this.userRepository.findOne({ id });

    userToUpdate.email = updateUserDto.email;
    userToUpdate.name = updateUserDto.name;
    userToUpdate.password = updateUserDto.password;

    await this.userRepository.save(userToUpdate);

    return userToUpdate;
  }

  async remove(id: number) {
    let userToDelete = await this.userRepository.findOne({ id });

    let statusDeleted = await this.userRepository.remove(userToDelete);

    return statusDeleted;
  }
}
