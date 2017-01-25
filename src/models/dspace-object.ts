import { MetadataValue } from "./metadata"
import { ObjectUtil } from "../app/utilities/object.util"

/**
 * An abstract model class for a DSpaceObject.
 */
export abstract class DSpaceObject {
    /**
     * The identifier of this DSpaceObject
     */
    id: string;

    /**
     * A string representing the kind of DSpaceObject, e.g. community, item, …
     */
    type: string;

    /**
     * The name for this DSpaceObject
     */
    name: string;

    /**
     * An array containing all metadata of this DSpaceObject
     */
    metadata: Array<MetadataValue>;

    /**
     * An array of DSpaceObjects that are direct parents of this DSpaceObject
     */
    protected parents: Array<DSpaceObject>;

    /**
     * The DSpaceObject that owns this DSpaceObject
     */
    protected owner: DSpaceObject;

    /**
     * Create a new DSpaceObject.
     *
     * @param json
     *      A plain old javascript object representing a DSpaceObject as would be returned
     *      from the REST api. It uses json.id, json.name, json.handle, json.link json.type and
     *      json.metadata
     */
    constructor(json?: any) {
        if (ObjectUtil.isNotEmpty(json)) {
            this.id = json.id;
            this.type = json.type;

            let attributes = json.attributes;
            ObjectUtil.isNotEmpty(attributes)
            {
                this.name = attributes.name;
            }

            if (Array.isArray(json.relationships.metadata.data)) {
                this.metadata = json.metadata.map(metadataJSON => {
                    return new MetadataValue(metadataJSON);
                });
            }
        }
    }

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @returns an array of instances of a DSpaceObject subclass that are direct parents of this DSpaceObject
     */
    abstract getParents<T extends DSpaceObject>(): Array<T>;

    /**
     * An abstract method that will be implemented differently depending on the DSpaceObject's parent type
     * @returns an instance of a DSpaceObject subclass that owns this DSpaceObject
     */
    abstract getOwner<T extends DSpaceObject>(): T;

}