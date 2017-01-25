import { DSpaceObject } from "./dspace-object.model";
import { Bitstream } from "./bitstream.model";
import { Item } from "./item.model";

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
     * @param parents - array of Item that are direct parents of this Bundle
     */
    setParents(parents: Array<Bundle>) {
        this.parents = parents;
    }

    /**
     * @returns the Item that owns this Bundle
     */
    getOwner(): Item {
        return <Item> this.owner;
    }

    /**
     * @param owner - an instance of a Item subclass that owns this Bundle
     */
    setOwner(owner: Item) {
        this.owner = owner;
    }
}