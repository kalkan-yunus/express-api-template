import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class User extends BaseEntity {
	@ObjectIdColumn()
	id?: ObjectID;

	@Column()
	firstName!: string;

	@Column()
	lastName!: string;
}

export { User };
