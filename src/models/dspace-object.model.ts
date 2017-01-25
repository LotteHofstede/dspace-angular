import { MetadataValue } from "./metadata.model"

/**
 * An abstract model class for a DSpaceObject.
 */
export abstract class DSpaceObject {

    /**
     * The identifier of this DSpaceObject
     */
    private _id: string;

    /**
     * A string representing the kind of DSpaceObject, e.g. community, item, …
     */
    private _type: string;

    /**
     * The name for this DSpaceObject
     */
    private _name: string;

    /**
     * An array containing all metadata of this DSpaceObject
     */
    private _metadata: Array<MetadataValue>;

    /**
     * An array of DSpaceObjects that are direct parents of this DSpaceObject
     */
    protected parents: Array<DSpaceObject>;

    /**
     * The DSpaceObject that owns this DSpaceObject
     */
    protected owner: DSpaceObject;

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @returns an array of instances of a DSpaceObject subclass that are direct parents of this DSpaceObject
     */
    abstract getParents<T extends DSpaceObject>(): Array<T>;

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @param parents - array of instances of a DSpaceObject subclass that are direct parents of this DSpaceObject
     */
    abstract setParents<T extends DSpaceObject>(parents: Array<T>);

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @returns an instance of a DSpaceObject subclass that owns this DSpaceObject
     */
    abstract getOwner<T extends DSpaceObject>(): T;

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @param owner - an instance of a DSpaceObject subclass that owns this DSpaceObject
     */
    abstract setOwner<T extends DSpaceObject>(owner: T);

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get metadata(): Array<MetadataValue> {
        return this._metadata;
    }

    set metadata(value: Array<MetadataValue>) {
        this._metadata = value;
    }
}