import { Entity, Column, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	first_name!: string;

	@Column()
	last_name!: string;
}

export { User };
