import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';
import { AnsewersRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnsewersRepository = {
	create: async (answer: Answer) => {
		return;
	},
};

test('create an answer ', async () => {
	const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

	const answer = await answerQuestion.execute({
		content: 'Nova resposta',
		questionId: '1',
		instructorId: '1',
		
	});

	expect(answer.props.content).toEqual('Nova resposta');
});
