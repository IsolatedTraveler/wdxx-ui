export function oracle(backTable: string, table: string, where: string, primary: Array<string>, col: Array<string>) {
  return [
    `CREATE TABLE ${backTable} AS SELECT * FROM ${table} WHERE ${where};`
    , `MERGE INTO ${backTable} dst USING (SELECT * FROM ${table} WHERE ${where}) src ON (${primary.map(key => `src.${key} = dst.${key}`).join(' AND ')}) WHEN NOT MATCHED THEN INSERT (${col.join(', ')}) VALUES (${col.map(key => `src.${key}`).join(', ')});`
  ].join('\n')
}