import { Slug } from './value-objects/slug';
import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
interface QuestionProps {
	authorId: UniqueEntityID;
	bestAnswerId?:UniqueEntityID
	title: string;
	content: string;
	slung: Slug;
	createdAt: Date
	updateAt?:Date
}
export class Question extends Entity {
	constructor(public props: QuestionProps, id?: string) {
		super(id);
	}
}
