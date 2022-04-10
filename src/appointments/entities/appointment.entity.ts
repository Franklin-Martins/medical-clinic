import { Medic } from "src/medics/entities/medic.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// pending, concluded, canceled, abandoned

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    medicId: number;

    @Column({ type: 'date' })
    day: string;

    @Column({type: 'time'})
    startTime: string;
    
    @Column({type: 'time'})
    endTime: string;

    

    @ManyToOne(() => User, user => user.appointment)
    user: User;

    @ManyToOne(() => Medic, medic => medic.appointment)
    medic: Medic;
}
