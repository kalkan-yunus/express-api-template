import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
class User {
	@ObjectIdColumn()
	id!: ObjectID;

	@Column()
	firstName!: string;

	@Column()
	lastName!: string;
}

export { User };
