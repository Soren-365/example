import type { TableTypes } from './database';

type Note = Pick<TableTypes, 'note'> 

export interface INote<T extends keyof TableTypes= 'note'> {
    note: Pick<TableTypes, T>;
}

export class Note implements INote {
id = 0;
title = '';
content = '';
createdat = 'some time';
}

// the interface (we use the type)
// export interface INote extends Note {}

// the array type
export type TNoteStringArray = Array<keyof INote>;

// javascript array of the keys
export const PNote: TNote = Object.keys(new Note()) as TNoteStringArray;


// ////////////////// ExchangeFilters ///////////////

// export class ExchangeFilters {
// 	name = '';
// 	active = true;
// 	country = '';
// 	refundable = true;
// 	fixed = true;
// }

// export interface IExchangeFilters extends ExchangeFilters {}

// export type TExchangeFilters = Array<keyof IExchangeFilters>;

// export const PExchangeFilters: TExchangeFilters = Object.keys(new Exchange()) as TExchangeFilters;
