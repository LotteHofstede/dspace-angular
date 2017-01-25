import { DSpaceObject } from "./dspace-object";
import { Bundle } from "./bundle";

export class Bitstream extends DSpaceObject {
    /**
     * The size of this bitstream in bytes(?)
     */
    size:number;

    /**
     * The relative path to this Bitstream's file
     */
    url:string;

    /**
     * The mime type of this Bitstream
     */
    mimetype:string;

    /**
     * The description of this Bitstream
     */
    description:string;

    /**
     * @returns an array of Bundles that are direct parents of this Bitstream
     */
    getParents(): Array<Bundle> {
        return <Array<Bundle>> this.parents;
    }

    /**
     * @returns the Bundle that owns this Bitstream
     */
    getOwner(): Bundle {
        return <Bundle> this.owner;
    }
}