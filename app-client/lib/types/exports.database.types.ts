import type { Database } from './database.types';

// export type Note = Database.Public.Tables.note.Row

// export interface PublicTypes<T extends keyof Database = 'public'> {
//   public: Pick<Database, T>;
// }

// export interface TableTypes<T extends keyof PublicTypes = 'public'> {
//     tables: Pick<PublicTypes, T>;
//   }

export type PublicTypes = Pick<Database, 'public'>
export type TableTypes = Pick<PublicTypes["public"], 'Tables'>["Tables"];

export type PageModuleDb = TableTypes["page_module"];
export type AppDb = TableTypes["page_module"];