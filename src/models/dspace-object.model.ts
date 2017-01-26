import { MetadataValue } from "./metadata.model"

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
    parents: Array<DSpaceObject>;

    /**
     * The DSpaceObject that owns this DSpaceObject
     */
    owner: DSpaceObject;

}