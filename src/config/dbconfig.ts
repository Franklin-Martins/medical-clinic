import { TypeOrmModule } from "@nestjs/typeorm";

const config = (pathOfFile):TypeOrmModule => {
    return(
        {
            type: 'sqlite',
            database: 'db',
            entities: [pathOfFile + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }
    )
}

export default config;