import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Optional } from '../../types/optional';

interface StudentProps {
	name: string;
}

export class Student extends Entity {
	constructor(public props: StudentProps, id?: UniqueEntityID) {
		super(id);
	}
	static create(props: StudentProps, id?: UniqueEntityID) {
		const student = new Student(props, id);
		return student;
	}
}
