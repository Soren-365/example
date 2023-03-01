// declare the class

import type { Database } from "@/lib/db-generated";


// export type Note = Database.Public.Tables.note.Row



export class Note {
    id = 0;
title = '';
content = '';
createdat = 'some time';
}

// the interface (we use the type)
export interface INote extends Note {}

// the normal typescript type
export type TNote = Array<keyof INote>;

// javascript array of the keys
export const PNote: TNote = Object.keys(new Note()) as TNote;


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
