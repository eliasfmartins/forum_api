import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
interface InstructorProps {
	name: string;
}
export class Instructor extends Entity {
	constructor(public props: InstructorProps, id?: UniqueEntityID) {
		super(id);
	}
	static create(props: InstructorProps, id?: UniqueEntityID) {
		const instructor = new Instructor(props, id);
		return instructor;
	}
}
