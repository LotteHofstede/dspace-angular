import { DSpaceObject } from "./dspace-object.model";
import { Bundle } from "./bundle.model";

export class Bitstream extends DSpaceObject {

    /**
     * The size of this bitstream in bytes(?)
     */
    private _size:number;

    /**
     * The relative path to this Bitstream's file
     */
    private _url:string;

    /**
     * The mime type of this Bitstream
     */
    private _mimetype:string;

    /**
     * The description of this Bitstream
     */
    private _description:string;

    /**
     * @returns an array of Bundles that are direct parents of this Bitstream
     */
    getParents(): Array<Bundle> {
        return <Array<Bundle>> this.parents;
    }

    /**
     * @param parents - array of Bundles that are direct parents of this Bitstream
     */
    setParents(parents: Array<Bundle>) {
        this.parents = parents;
    }

    /**
     * @returns the Bundle that owns this Bitstream
     */
    getOwner(): Bundle {
        return <Bundle> this.owner;
    }

    /**
     * @param owner - an instance of a Bundle subclass that owns this Bitstream
     */
    setOwner(owner: Bundle) {
        this.owner = owner;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get mimetype(): string {
        return this._mimetype;
    }

    set mimetype(value: string) {
        this._mimetype = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}