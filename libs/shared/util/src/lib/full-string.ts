import {NumberInput} from '@angular/cdk/coercion';

export const fullString = (list: NumberInput[] = [], separator: string = ' '): string => {
    return list.filter(Boolean).join(separator);
};
