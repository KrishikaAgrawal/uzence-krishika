import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
function DataTable({ data, columns, loading = false, selectable = false, onRowSelect, emptyMessage = "No data available", className, }) {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedRows, setSelectedRows] = useState([]);
    // Handle sorting
    const handleSort = (col) => {
        if (!col.sortable)
            return;
        if (sortKey === col.dataIndex) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }
        else {
            setSortKey(col.dataIndex);
            setSortOrder("asc");
        }
    };
    const sortedData = React.useMemo(() => {
        if (!sortKey)
            return data;
        return [...data].sort((a, b) => {
            const aVal = a[sortKey];
            const bVal = b[sortKey];
            if (aVal === bVal)
                return 0;
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
    const handleCheckboxChange = (row) => {
        let newSelected = [];
        if (selectedRows.includes(row)) {
            newSelected = selectedRows.filter((r) => r !== row);
        }
        else {
            newSelected = [...selectedRows, row];
        }
        setSelectedRows(newSelected);
        onRowSelect?.(newSelected);
    };
    return (_jsx("div", { className: `overflow-x-auto w-full ${className}`, children: _jsxs("table", { className: "min-w-full border-collapse border border-gray-200 dark:border-gray-600", children: [_jsx("thead", { className: "bg-gray-100 dark:bg-gray-800", children: _jsxs("tr", { children: [selectable && (_jsx("th", { className: "px-4 py-2 border-b border-gray-200 dark:border-gray-600" })), columns.map((col) => (_jsxs("th", { className: "text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer select-none", onClick: () => handleSort(col), children: [col.title, col.sortable && sortKey === col.dataIndex && (_jsx("span", { className: "ml-1", children: sortOrder === "asc" ? "▲" : "▼" }))] }, col.key)))] }) }), _jsx("tbody", { children: loading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "text-center px-4 py-6 text-gray-500", children: "Loading..." }) })) : sortedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "text-center px-4 py-6 text-gray-500", children: emptyMessage }) })) : (sortedData.map((row, rowIndex) => {
                        const isSelected = selectedRows.includes(row);
                        return (_jsxs("tr", { className: `hover:bg-gray-50 dark:hover:bg-gray-700 ${isSelected ? "bg-blue-100 dark:bg-blue-800" : ""}`, children: [selectable && (_jsx("td", { className: "px-4 py-2 text-center border-b border-gray-200 dark:border-gray-600", children: _jsx("input", { type: "checkbox", checked: isSelected, onChange: () => handleCheckboxChange(row) }) })), columns.map((col) => (_jsx("td", { className: "px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600", children: row[col.dataIndex] }, col.key)))] }, rowIndex));
                    })) })] }) }));
}
export default DataTable;
