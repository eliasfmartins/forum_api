import { UniqueEntityID } from './unique-entity-id';

export class Entity {
	private _id: UniqueEntityID;

	get id() {
		return this._id.toString();
	}
	protected constructor( id?: UniqueEntityID) {
		this._id = id?? new UniqueEntityID();
	}
}
