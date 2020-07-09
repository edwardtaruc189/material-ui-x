[@material-ui/x-grid-modules](../README.md) › [Globals](../globals.md) › ["src/gridComponent"](_src_gridcomponent_.md)

# Module: "src/gridComponent"

## Index

### Variables

* [GridComponent](_src_gridcomponent_.md#const-gridcomponent)

## Variables

### `Const` GridComponent

• **GridComponent**: *React.FC‹[GridComponentProps](../interfaces/_src_gridcomponentprops_.gridcomponentprops.md)›* = React.memo(
  ({ rows, columns, options, apiRef, loading, licenseStatus, className }) => {
    useLoggerFactory(options?.logger, options?.logLevel);
    const logger = useLogger('Grid');
    const gridRootRef: GridRootRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const columnsHeaderRef = useRef<HTMLDivElement>(null);
    const columnsContainerRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const renderingZoneRef = useRef<HTMLDivElement>(null);
    const internalApiRef = useRef<GridApi | null | undefined>();

    const [internalOptions, setInternalOptions] = useState<GridOptions>(
      mergeOptions(DEFAULT_GRID_OPTIONS, options),
    );
    useEffect(() => {
      setInternalOptions(previousState => mergeOptions(previousState, options));
    }, [options]);

    if (!apiRef) {
      apiRef = internalApiRef;
    }

    const initialised = useApi(gridRootRef, windowRef, internalOptions, apiRef);
    const internalColumns = useColumns(internalOptions, columns, apiRef);
    const internalRows = useRows(internalOptions, rows, initialised, apiRef);
    useKeyboard(internalOptions, initialised, apiRef);
    useSelection(internalOptions, rows, initialised, apiRef);
    useSorting(internalOptions, rows, columns, apiRef);

    const renderCtx = useVirtualRows(
      columnsHeaderRef,
      windowRef,
      renderingZoneRef,
      internalColumns,
      internalRows,
      internalOptions,
      apiRef,
    );

    const onResizeColumn = useColumnResize(columnsHeaderRef, apiRef, internalOptions.headerHeight);
    const paginationProps = usePagination(internalRows, internalColumns, internalOptions, apiRef);

    useEffect(() => {
      setInternalOptions(previousState => {
        if (previousState.paginationPageSize !== paginationProps.pageSize) {
          return { ...previousState, paginationPageSize: paginationProps.pageSize };
        }
        return previousState;
      });
    }, [paginationProps.pageSize, setInternalOptions]);

    const components = useComponents(
      internalColumns,
      internalRows,
      internalOptions,
      paginationProps,
      apiRef,
      gridRootRef,
    );

    const onResize = useCallback(
      (size: ElementSize) => {
        logger.info('resized...', size);
        if (apiRef && apiRef.current) {
          apiRef.current.resize();
        }
      },
      [logger, apiRef],
    );
    const debouncedOnResize = useMemo(() => debounce(onResize, 100), [onResize]) as any;

    useEffect(() => {
      return () => {
        logger.info('canceling resize...');
        debouncedOnResize.cancel();
      };
    }, [logger, debouncedOnResize]);

    logger.info(
      `Rendering, page: ${renderCtx?.page}, col: ${renderCtx?.firstColIdx}-${renderCtx?.lastColIdx}, row: ${renderCtx?.firstRowIdx}-${renderCtx?.lastRowIdx}`,
      renderCtx,
    );

    const getTotalHeight = useCallback(
      size => {
        if (!internalOptions.autoHeight) {
          return size.height;
        }
        const footerHeight =
          (footerRef.current && footerRef.current.getBoundingClientRect().height) || 0;
        let dataHeight = (renderCtx && renderCtx.dataContainerSizes!.height) || 0;
        if (dataHeight < internalOptions.rowHeight) {
          dataHeight = internalOptions.rowHeight * 2; //If we have no rows, we give the size of 2 rows to display the no rows overlay
        }

        return footerHeight + dataHeight + internalOptions.headerHeight;
      },
      [
        internalOptions.autoHeight,
        internalOptions.headerHeight,
        internalOptions.rowHeight,
        renderCtx,
      ],
    );

    return (
      <AutoSizerWrapper onResize={debouncedOnResize} style={{ height: 'unset', width: 'unset' }}>
        {(size: any) => (
          <GridRoot
            ref={gridRootRef}
            className={'material-grid MuiGrid ' + (className || '')}
            options={internalOptions}
            style={{ width: size.width, height: getTotalHeight(size) }}
            role={'grid'}
            aria-colcount={internalColumns.visible.length}
            aria-rowcount={internalRows.length + 1}
            tabIndex={0}
            aria-label={'Grid'}
            aria-multiselectable={internalOptions.enableMultipleSelection}
          >
            <ApiContext.Provider value={apiRef}>
              <OptionsContext.Provider value={internalOptions}>
                {components.headerComponent}
                <div className={'main-grid-container'}>
                  <Watermark licenseStatus={licenseStatus} />
                  <ColumnsContainer ref={columnsContainerRef}>
                    <ColumnsHeader
                      ref={columnsHeaderRef}
                      columns={internalColumns.visible || []}
                      hasScrollX={!!renderCtx?.hasScrollX}
                      headerHeight={internalOptions.headerHeight}
                      onResizeColumn={onResizeColumn}
                      renderCtx={renderCtx}
                    />
                  </ColumnsContainer>
                  {!loading && internalRows.length === 0 && components.noRowsComponent}
                  {loading && components.loadingComponent}
                  <Window ref={windowRef}>
                    <DataContainer
                      ref={gridRef}
                      className={DATA_CONTAINER_CSS_CLASS}
                      style={{
                        minHeight: renderCtx?.dataContainerSizes?.height,
                        minWidth: renderCtx?.dataContainerSizes?.width,
                      }}
                    >
                      {renderCtx != null && (
                        <RenderContext.Provider value={renderCtx}>
                          <Viewport
                            ref={renderingZoneRef}
                            options={internalOptions}
                            rows={internalRows}
                            visibleColumns={internalColumns.visible}
                          />
                        </RenderContext.Provider>
                      )}
                    </DataContainer>
                  </Window>
                </div>
                {components.footerComponent || (
                  <DefaultFooter
                    ref={footerRef}
                    paginationProps={paginationProps}
                    rowCount={internalRows.length}
                    options={internalOptions}
                  />
                )}
              </OptionsContext.Provider>
            </ApiContext.Provider>
          </GridRoot>
        )}
      </AutoSizerWrapper>
    );
  },
)

*Defined in [packages/grid/x-grid-modules/src/gridComponent.tsx:30](https://github.com/mui-org/material-ui-x/blob/a679779/packages/grid/x-grid-modules/src/gridComponent.tsx#L30)*