import { DSpaceObject } from "./dspace-object.model";
import { Bitstream } from "./bitstream.model";

export class Collection extends DSpaceObject {

    /**
     * A string representing the unique handle of this Collection
     */
    private _handle:string;

    /**
     * The introductory text of this Collection
     */
    private _introduction:string;

    /**
     * The copyright text of this Collection
     */
    private _copyright:string;

    /**
     * The description of this Collection
     */
    private _description:string;

    /**
     * The license of this Collection
     */
    private _license:string;

    /**
     * The sidebar text of this Collection
     */
    private _sidebarText:string;

    /**
     * The Bitstream that represents the logo of this Collection
     */
    private _logo:Bitstream;

    /**
     * @returns an array of Collections that are direct parents of this Collection
     */
    getParents(): Array<Collection> {
        return <Array<Collection>> this.parents;
    }

    /**
     * @param parents - array of Collections that are direct parents of this Collection
     */
    setParents(parents: Array<Collection>) {
        this.parents = parents;
    }

    /**
     * @returns the Collection that owns this Collection
     */
    getOwner(): Collection {
        return <Collection> this.owner;
    }

    /**
     * @param owner - an instance of a Collection subclass that owns this Collection
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

    get introduction(): string {
        return this._introduction;
    }

    set introduction(value: string) {
        this._introduction = value;
    }

    get copyright(): string {
        return this._copyright;
    }

    set copyright(value: string) {
        this._copyright = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get license(): string {
        return this._license;
    }

    set license(value: string) {
        this._license = value;
    }

    get sidebarText(): string {
        return this._sidebarText;
    }

    set sidebarText(value: string) {
        this._sidebarText = value;
    }

    get logo(): Bitstream {
        return this._logo;
    }

    set logo(value: Bitstream) {
        this._logo = value;
    }

}