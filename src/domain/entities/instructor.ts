import { Entity } from '../../core/entities/entity';
interface InstructorProps {
	name: string;
}
export class Instructor extends Entity {
	constructor(public props: InstructorProps, id?: string) {
		super(id);
	}
}
