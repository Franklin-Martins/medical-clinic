import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Medic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @OneToMany(()=> Appointment, appointment => appointment.medic, {onDelete: 'CASCADE'})
    appointment: Appointment[]
}