import * as React from 'react';
import { ComparatorFn, SortDirection } from '../sortModel';
import { CellValue } from '../rows';
import { ColType } from './colType';
import { CellClassPropType, CellClassRules } from '../cellClass';
import { ColParams } from '../params/colParams';
import { CellParams, ValueFormatterParams, ValueGetterParams } from '../params/cellParams';

export type Alignement = 'left' | 'right' | 'center';

export interface ColDef {
  field: string;
  headerName?: string;
  description?: string;
  width?: number;
  hide?: boolean;
  sortable?: boolean;
  resizable?: boolean;
  sortComparator?: ComparatorFn;
  sortDirection?: SortDirection;
  sortIndex?: number;
  type?: ColType;
  align?: Alignement;
  valueGetter?: (params: ValueGetterParams) => CellValue;
  valueFormatter?: (params: ValueFormatterParams) => CellValue;
  cellClass?: CellClassPropType;
  cellClassRules?: CellClassRules;
  cellRenderer?: (params: CellParams) => React.ReactElement;
  headerClass?: string | string[];
  headerComponent?: (params: ColParams) => React.ReactElement;
  headerAlign?: Alignement;
  hideSortIcons?: boolean;
  disableClickEventBubbling?: boolean;
}
export type Columns = ColDef[];
export type ColTypeDef = Omit<ColDef, 'field'>;

export interface ColumnsMeta {
  totalWidth: number;
  positions: number[];
}

export type ColumnLookup = { [field: string]: ColDef };

export interface InternalColumns {
  all: Columns;
  visible: Columns;
  meta: ColumnsMeta;
  hasColumns: boolean;
  hasVisibleColumns: boolean;
  lookup: ColumnLookup;
}
