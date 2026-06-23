export interface IBiomaAPI {
    name: string;
    dimension: string;
    category: string;
}

export interface IRespostaBiomaAPI {
    data: IBiomaAPI[];
}


export interface IMobAPI {
    name: string;
    type: string;
    hp: number;
    hehavior: string;
}

export interface IRespostaMobAPI {
    data: IMobAPI[];
}

export interface IPesquisavel {
    atendeCriterio(criterio: string): boolean;
}