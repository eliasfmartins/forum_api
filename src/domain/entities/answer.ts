import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Optional } from '../../types/optional';

interface AnswerProps {
	authorId: UniqueEntityID;
	questionId: UniqueEntityID;
	content: string;
	createdAt: Date;
	updateAt?: Date;
}

export class Answer extends Entity {
	constructor(public props: AnswerProps, id?: UniqueEntityID) {
		super(id);
	}
	static create(
		props: Optional<AnswerProps, 'createdAt'>,
		id?: UniqueEntityID
	) {
		const answer = new Answer({ ...props, createdAt: new Date() }, id);
		return answer;
	}
}
