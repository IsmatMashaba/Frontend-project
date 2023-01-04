import React from "react";

export type Country = {
    name: {
        common: string;
    };
    region: string;
    population : number;
    flags: {
        png:string
    };
    area: number;
    languages: {
        [key: string]: string
    };
}
