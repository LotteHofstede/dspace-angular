import { DSpaceObject } from "./dspace-object";
import { Collection } from "./collection";

export class Item extends DSpaceObject {
    /**
     * A string representing the unique handle of this Item
     */
    handle: string;

    /**
     * The Date of the last modification of this Item
     */
    lastModified: Date;

    /**
     * A boolean representing if this Item is currently archived or not
     */
    isArchived: boolean;

    /**
     * A boolean representing if this Item is currently withdrawn or not
     */
    isWithdrawn: boolean;

    /**
     * @returns an array of Collections that are direct parents of this Item
     */
    getParents(): Array<Collection> {
        return <Array<Collection>> this.parents;
    }

    /**
     * @returns the Collection that owns this Item
     */
    getOwner(): Collection {
        return <Collection> this.owner;
    }
}