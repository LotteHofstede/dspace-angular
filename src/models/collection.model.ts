import { DSpaceObject } from "./dspace-object.model";
import { Bitstream } from "./bitstream.model";

export class Collection extends DSpaceObject {

    /**
     * A string representing the unique handle of this Collection
     */
    handle: string;

    /**
     * The introductory text of this Collection
     */
    introduction: string;

    /**
     * The copyright text of this Collection
     */
    copyright: string;

    /**
     * The description of this Collection
     */
    description: string;

    /**
     * The license of this Collection
     */
    license: string;

    /**
     * The sidebar text of this Collection
     */
    sidebarText: string;

    /**
     * The Bitstream that represents the logo of this Collection
     */
    logo: Bitstream;

    /**
     * An array of Collections that are direct parents of this Collection
     */
    parents: Array<Collection>;

    /**
     * The Collection that owns this Collection
     */
    owner: Collection;
}