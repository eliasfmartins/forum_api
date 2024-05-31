import { Entity } from '../../core/entities/entity';

interface StudentProps {
	name: string;
}

export class Student extends Entity {
	constructor(public props: StudentProps, id?: string) {
		super(id);
	}
}
