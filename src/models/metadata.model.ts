export class MetadataValue {

    /**
     * The metadata field of this MetadataValue
     */
    private _field: string;

    /**
     * The language of this MetadataValue
     */
    private _language: string;

    /**
     * The value of this MetadataValue
     */
    private _value: string;

    get field(): string {
        return this._field;
    }

    set field(value: string) {
        this._field = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}