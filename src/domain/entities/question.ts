import { Slug } from './value-objects/slug';
import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Optional } from '../../types/optional';
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
	constructor(public props: QuestionProps, id?: UniqueEntityID) {
		super(id);
		
	}
	static create(props:Optional<QuestionProps, 'createdAt'>, id?: UniqueEntityID){
		const question = new Question({...props, createdAt:new Date(),},id)
		return question
	}
}
