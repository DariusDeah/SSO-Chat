abstract class Database<T> {
  constructor() {
    this.createTable();
  }
  /** define query for creating database table */
  abstract createTable(): Promise<void>;
  abstract dropTable(): Promise<void>;
  abstract alterTable(): Promise<void>;
  abstract create(dataObject: T): Promise<T | void>;
  abstract selectAll(): Promise<T[] | void>;
  abstract selectById(id: string): Promise<T | void>;
  /**provide field to update on data row  */
  abstract update(dataField: string): Promise<T | void>;
  /** provide fields to update on data row */
  abstract updates(...dataFields: string[]): Promise<T | void>;
  /**removes row by id */
  abstract removeById(query: string): Promise<T | void>;
}
