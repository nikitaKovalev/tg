import {baseEnvironment} from './environment.base';
import {Environment} from './environment.interface';

export const environment: Environment = {
    ...baseEnvironment,
    baseUrl: '/backend/api',
    production: true,
};
