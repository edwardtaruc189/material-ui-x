import * as React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { CellParams } from '@material-ui/x-grid';

export const IsDone: React.FC<{ value: boolean }> = React.memo(({ value }) =>
  value ? <DoneIcon fontSize="small" /> : <ClearIcon fontSize="small" />,
);
IsDone.displayName = 'IsDone';

export function DoneRenderer(params: CellParams) {
  return <IsDone value={!!params.value} />;
}
