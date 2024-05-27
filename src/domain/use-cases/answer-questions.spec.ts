import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';
import { Answer } from '../entities/answer';

test('create an answer ', () => {
	const answerQuestion = new AnswerQuestionUseCase();

	const answer = answerQuestion.execute({
		content: 'Nova resposta',
		questionId: '1',
		instructorId: '1',
	});

	expect(answer.content).toEqual('Nova resposta');
});
