import { UniqueEntityID } from './unique-entity-id';

export class Entity {
	private _id: UniqueEntityID;

	get id() {
		return this._id;
	}
	constructor( id?: string) {
		this._id = new UniqueEntityID(id);
	}
}
