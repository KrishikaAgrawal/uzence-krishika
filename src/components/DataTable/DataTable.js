"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function DataTable(_a) {
    var data = _a.data, columns = _a.columns, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.selectable, selectable = _c === void 0 ? false : _c, onRowSelect = _a.onRowSelect, _d = _a.emptyMessage, emptyMessage = _d === void 0 ? "No data available" : _d, className = _a.className;
    var _e = (0, react_1.useState)(null), sortKey = _e[0], setSortKey = _e[1];
    var _f = (0, react_1.useState)("asc"), sortOrder = _f[0], setSortOrder = _f[1];
    var _g = (0, react_1.useState)([]), selectedRows = _g[0], setSelectedRows = _g[1];
    // Handle sorting
    var handleSort = function (col) {
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
    var sortedData = react_1.default.useMemo(function () {
        if (!sortKey)
            return data;
        return __spreadArray([], data, true).sort(function (a, b) {
            var aVal = a[sortKey];
            var bVal = b[sortKey];
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
    var handleCheckboxChange = function (row) {
        var newSelected = [];
        if (selectedRows.includes(row)) {
            newSelected = selectedRows.filter(function (r) { return r !== row; });
        }
        else {
            newSelected = __spreadArray(__spreadArray([], selectedRows, true), [row], false);
        }
        setSelectedRows(newSelected);
        onRowSelect === null || onRowSelect === void 0 ? void 0 : onRowSelect(newSelected);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto w-full ".concat(className), children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full border-collapse border border-gray-200 dark:border-gray-600", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-100 dark:bg-gray-800", children: (0, jsx_runtime_1.jsxs)("tr", { children: [selectable && ((0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 border-b border-gray-200 dark:border-gray-600" })), columns.map(function (col) { return ((0, jsx_runtime_1.jsxs)("th", { className: "text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer select-none", onClick: function () { return handleSort(col); }, children: [col.title, col.sortable && sortKey === col.dataIndex && ((0, jsx_runtime_1.jsx)("span", { className: "ml-1", children: sortOrder === "asc" ? "▲" : "▼" }))] }, col.key)); })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: loading ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "text-center px-4 py-6 text-gray-500", children: "Loading..." }) })) : sortedData.length === 0 ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "text-center px-4 py-6 text-gray-500", children: emptyMessage }) })) : (sortedData.map(function (row, rowIndex) {
                        var isSelected = selectedRows.includes(row);
                        return ((0, jsx_runtime_1.jsxs)("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700 ".concat(isSelected ? "bg-blue-100 dark:bg-blue-800" : ""), children: [selectable && ((0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 text-center border-b border-gray-200 dark:border-gray-600", children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: isSelected, onChange: function () { return handleCheckboxChange(row); } }) })), columns.map(function (col) { return ((0, jsx_runtime_1.jsx)("td", { className: "px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600", children: row[col.dataIndex] }, col.key)); })] }, rowIndex));
                    })) })] }) }));
}
exports.default = DataTable;
