import { IParseFieldOperation } from './IParseFieldOperation';
import { ParseClientPlugins } from '../ParseClientPlugins';

export class ParseRemoveOperation implements IParseFieldOperation {
    encode(): any {
        return {
            __op: 'Remove',
            objects: ParseClientPlugins.instance.Encoder.encode(this.objects)
        };
    }
    mergeWithPrevious(previous: IParseFieldOperation): IParseFieldOperation {
        throw new Error("Method not implemented.");
    }
    apply(oldValue: object, key: string): object {
        throw new Error("Method not implemented.");
    }

    objects: Array<object>;
    constructor(objects: Array<object>) {
        this.objects = objects;
    }
}

