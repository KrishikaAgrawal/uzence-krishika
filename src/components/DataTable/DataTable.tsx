    import React, { useState } from "react";
    import type { DataTableProps, Column } from "./DataTable.types";

    function DataTable<T extends Record<string, any>>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect,
    emptyMessage = "No data available",
    className,
    }: DataTableProps<T>) {
    const [sortKey, setSortKey] = useState<keyof T | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedRows, setSelectedRows] = useState<T[]>([]);

    // Handle sorting
    const handleSort = (col: Column<T>) => {
        if (!col.sortable) return;

        if (sortKey === col.dataIndex) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
        setSortKey(col.dataIndex);
        setSortOrder("asc");
        }
    };

    const sortedData = React.useMemo(() => {
        if (!sortKey) return data;
        return [...data].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal === bVal) return 0;
        return sortOrder === "asc"
            ? aVal > bVal
            ? 1
            : -1
            : aVal > bVal
            ? -1
            : 1;
        });
    }, [data, sortKey, sortOrder]);

    // Handle checkbox selection
    const handleCheckboxChange = (row: T) => {
        let newSelected: T[] = [];
        if (selectedRows.includes(row)) {
        newSelected = selectedRows.filter((r) => r !== row);
        } else {
        newSelected = [...selectedRows, row];
        }
        setSelectedRows(newSelected);
        onRowSelect?.(newSelected);
    };

    return (
        <div className={`overflow-x-auto w-full ${className}`}>
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
                {selectable && (
                <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-600"></th>
                )}
                {columns.map((col) => (
                <th
                    key={col.key}
                    className="text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer select-none"
                    onClick={() => handleSort(col)}
                >
                    {col.title}
                    {col.sortable && sortKey === col.dataIndex && (
                    <span className="ml-1">
                        {sortOrder === "asc" ? "▲" : "▼"}
                    </span>
                    )}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {loading ? (
                <tr>
                <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="text-center px-4 py-6 text-gray-500"
                >
                    Loading...
                </td>
                </tr>
            ) : sortedData.length === 0 ? (
                <tr>
                <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="text-center px-4 py-6 text-gray-500"
                >
                    {emptyMessage}
                </td>
                </tr>
            ) : (
                sortedData.map((row, rowIndex) => {
                const isSelected = selectedRows.includes(row);
                return (
                    <tr
                    key={rowIndex}
                    className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        isSelected ? "bg-blue-100 dark:bg-blue-800" : ""
                    }`}
                    >
                    {selectable && (
                        <td className="px-4 py-2 text-center border-b border-gray-200 dark:border-gray-600">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleCheckboxChange(row)}
                        />
                        </td>
                    )}
                    {columns.map((col) => (
                        <td
                        key={col.key}
                        className="px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600"
                        >
                        {row[col.dataIndex]}
                        </td>
                    ))}
                    </tr>
                );
                })
            )}
            </tbody>
        </table>
        </div>
    );
    }

    export default DataTable;
