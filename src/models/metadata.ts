import { ObjectUtil } from "../app/utilities/object.util"
export class MetadataValue {


    /**
     * The metadata field of this MetadataValue
     */
    field: string;

    /**
     * The language of this MetadataValue
     */
    language: string;

    /**
     * The value of this MetadataValue
     */
    value: string;


    constructor(json?: any) {
        if (ObjectUtil.isNotEmpty(json)) {
            this.field = json.key;
            this.value = json.value;
            this.language = json.language;
        }
    }
}