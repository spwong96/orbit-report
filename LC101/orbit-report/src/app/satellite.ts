import { stringify } from 'querystring';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    shouldShowWarning: boolean = true;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name
        this.orbitType = orbitType
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }
}