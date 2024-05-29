import { Answer } from '../entities/answer';
import { AnsewersRepository } from '../repositories/answers-repository';

interface AnswerQuestionUseCaseRequest {
	instructorId: string;
	questionId: string;
	content: string;
}

export class AnswerQuestionUseCase {
	constructor(private answerRepository: AnsewersRepository) {}
	async execute({
		instructorId,
		questionId,
		content,
	}: AnswerQuestionUseCaseRequest) {
		const answer = new Answer({
			content,
			questionId,
			authorId: instructorId,
		});
		await this.answerRepository.create(answer);
		return answer;
	}
}
