[@material-ui/x-grid-modules](../README.md) › [Globals](../globals.md) › ["src/components/cell"](_src_components_cell_.md)

# Module: "src/components/cell"

## Index

### Interfaces

* [GridCellProps](../interfaces/_src_components_cell_.gridcellprops.md)

### Variables

* [Cell](_src_components_cell_.md#const-cell)
* [LeftEmptyCell](_src_components_cell_.md#const-leftemptycell)
* [RightEmptyCell](_src_components_cell_.md#const-rightemptycell)

## Variables

### `Const` Cell

• **Cell**: *React.FC‹[GridCellProps](../interfaces/_src_components_cell_.gridcellprops.md)›* = React.memo(
  ({
    value,
    field,
    width,
    children,
    showRightBorder,
    align,
    formattedValue,
    cssClass,
    tabIndex,
    colIndex,
    rowIndex,
  }) => {
    const cssClasses = classnames(
      CELL_CSS_CLASS,
      cssClass,
      { 'with-border': showRightBorder },
      align !== 'left' ? align : '',
    );
    const valueToRender = formattedValue || value;

    return (
      <div
        className={cssClasses}
        role={'cell'}
        data-value={value}
        data-field={field}
        data-colindex={colIndex}
        data-rowindex={rowIndex}
        aria-colindex={colIndex}
        style={{ minWidth: width, maxWidth: width }}
        tabIndex={tabIndex}
      >
        {children ? children : valueToRender?.toString()}
      </div>
    );
  },
)

*Defined in [packages/grid/x-grid-modules/src/components/cell.tsx:19](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/src/components/cell.tsx#L19)*

___

### `Const` LeftEmptyCell

• **LeftEmptyCell**: *React.FC‹object›* = React.memo(({ width }) =>
  !width ? null : <Cell key={'empty-col-left'} width={width} />,
)

*Defined in [packages/grid/x-grid-modules/src/components/cell.tsx:61](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/src/components/cell.tsx#L61)*

___

### `Const` RightEmptyCell

• **RightEmptyCell**: *React.FC‹object›* = React.memo(({ width }) =>
  !width ? null : <Cell key={'empty-col-right'} width={width} />,
)

*Defined in [packages/grid/x-grid-modules/src/components/cell.tsx:66](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/src/components/cell.tsx#L66)*