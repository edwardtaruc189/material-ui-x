[@material-ui/x-grid-modules](../README.md) › [Globals](../globals.md) › ["src/components/styled-wrappers/data-container"](_src_components_styled_wrappers_data_container_.md)

# Module: "src/components/styled-wrappers/data-container"

## Index

### Variables

* [DataContainer](_src_components_styled_wrappers_data_container_.md#const-datacontainer)

## Variables

### `Const` DataContainer

• **DataContainer**: *ForwardRefExoticComponent‹HTMLAttributes‹HTMLDivElement› & RefAttributes‹HTMLDivElement››* = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div ref={ref} className={'data-container ' + (className || '')} {...rest}>
      {children}
    </div>
  );
})

*Defined in [packages/grid/x-grid-modules/src/components/styled-wrappers/data-container.tsx:4](https://github.com/mui-org/material-ui-x/blob/02342a6/packages/grid/x-grid-modules/src/components/styled-wrappers/data-container.tsx#L4)*