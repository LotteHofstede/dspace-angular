import { DSpaceObject } from "./dspace-object";
import { Bitstream } from "./bitstream";
import { Item } from "./item";

export class Bundle extends DSpaceObject {
    /**
     * The primary bitstream of this Bundle
     */
    primaryBitstream:Bitstream;

    /**
     * @returns an array of Item that are direct parents of this Bundle
     */
    getParents(): Array<Item> {
        return <Array<Item>> this.parents;
    }

    /**
     * @returns the Item that owns this Bundle
     */
    getOwner(): Item {
        return <Item> this.owner;
    }
}