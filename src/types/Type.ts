export type Country = {
    name: {
        common: string;
    };
    region: string;
    population : number;
    flags: {
        png:string
    };
    capital: string[];
    area: number;
    languages: {
        [key: string]: string
    };
}
