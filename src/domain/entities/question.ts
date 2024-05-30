import { randomUUID } from 'node:crypto';
import { Slug } from './value-objects/slug';

export class Question {
	constructor(
		public title: string,
		public content: string,
		public authorId: string,
		public slung: Slug,
		public id?: string
	) {
		this.id = id ?? randomUUID();
	}
}
