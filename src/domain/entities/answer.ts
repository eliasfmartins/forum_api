import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';

interface AnswerProps {
	authorId: UniqueEntityID;
	questionId: UniqueEntityID;
	content: string;
	createdAt: Date
	updateAt?:Date
}

export class Answer extends Entity {
	constructor(public props: AnswerProps, id?: string) {
		super(id);
	}
}
