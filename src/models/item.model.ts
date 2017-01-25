import { DSpaceObject } from "./dspace-object.model";
import { Collection } from "./collection.model";

export class Item extends DSpaceObject {

    /**
     * A string representing the unique handle of this Item
     */
    private _handle: string;

    /**
     * The Date of the last modification of this Item
     */
    private _lastModified: Date;

    /**
     * A boolean representing if this Item is currently archived or not
     */
    private _isArchived: boolean;

    /**
     * A boolean representing if this Item is currently withdrawn or not
     */
    private _isWithdrawn: boolean;

    /**
     * @returns an array of Collections that are direct parents of this Item
     */
    getParents(): Array<Collection> {
        return <Array<Collection>> this.parents;
    }

    /**
     * @param parents - array of Collections that are direct parents of this Item
     */
    setParents(parents: Array<Collection>) {
        this.parents = parents;
    }

    /**
     * @returns the Collection that owns this Item
     */
    getOwner(): Collection {
        return <Collection> this.owner;
    }

    /**
     * @param owner - an instance of a Collection subclass that owns this Item
     */
    setOwner(owner: Collection) {
        this.owner = owner;
    }

    get handle(): string {
        return this._handle;
    }

    set handle(value: string) {
        this._handle = value;
    }

    get lastModified(): Date {
        return this._lastModified;
    }

    set lastModified(value: Date) {
        this._lastModified = value;
    }

    get isArchived(): boolean {
        return this._isArchived;
    }

    set isArchived(value: boolean) {
        this._isArchived = value;
    }

    get isWithdrawn(): boolean {
        return this._isWithdrawn;
    }

    set isWithdrawn(value: boolean) {
        this._isWithdrawn = value;
    }
}