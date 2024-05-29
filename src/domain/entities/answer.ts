import { randomUUID } from 'node:crypto';

interface AnswerProps {
	content: string;
	authorId: string;
	questionId: string;
	id?: string;
}

export class Answer {
	constructor(public props: AnswerProps) {
		this.props.id = props.id ?? randomUUID();
	}
}
