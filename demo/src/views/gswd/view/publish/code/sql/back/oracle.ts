export  function oracle(backTable: string, table:string, where: string, primary:Array<string>,col: Array<string>) {
  where = where.replace(/'/g, "''")
  return `DECLARE
  v_table_exists NUMBER;
  v_rows_inserted NUMBER;
  BEGIN
  SELECT COUNT(*) INTO v_table_exists FROM USER_TABLES WHERE TABLE_NAME = '${backTable}';
  
  IF v_table_exists = 0 THEN
    EXECUTE IMMEDIATE '
      CREATE TABLE ${backTable} AS SELECT * FROM ${table} WHERE ${where}';
    v_rows_inserted := SQL%ROWCOUNT; -- 这里在创建表时实际上不会返回行数，因为创建表不是DML操作
  ELSE
    EXECUTE IMMEDIATE '
      MERGE INTO ${backTable} dst
      USING (
        SELECT *
        FROM ${table}
        WHERE ${where}
      ) src
      ON (${primary.map(key => `src.${key} = dst.${key}`).join(' AND ')})
      WHEN NOT MATCHED THEN
        INSERT (${col.join(', ')})
        VALUES (${col.map(key=>`src.${key}`).join(', ')})';
    v_rows_inserted := SQL%ROWCOUNT;
  END IF;
  DBMS_OUTPUT.PUT_LINE('Inserted rows: ' || v_rows_inserted);
  END;
  `
}