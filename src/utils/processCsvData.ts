const removeTimeFromDates = (row: string[]): string[] => {
    return row.map(dateTime => dateTime.split(' ')[0]);
};

const removeDuplicateDates = (csvData: string[][]): string[][] => {
    if (csvData.length === 0) return csvData;

    const header = csvData[0];
    const seenDates = new Set<string>();
    const columnsToRemove = new Set<number>();

    header.forEach((date, index) => {
        if (index === 0) return; // Skip the first column
        if (seenDates.has(date)) {
            columnsToRemove.add(index);
        } else {
            seenDates.add(date);
        }
    });

    return csvData.map(row => row.filter((_, index) => !columnsToRemove.has(index)));
};

const filterRowsWithNoRecentData = (csvData: string[][]): string[][] => {
    return csvData.filter(row => {
        const start = Math.max(1, row.length - 3); // Start from the 3rd last cell, but ignore the first cell
        const lastCells = row.slice(start);
        return lastCells.some(cell => cell);
    });
};

export const processCsvData = (csvData: string[][]): string[][] => {
    if (csvData.length > 0) {
        csvData[0] = removeTimeFromDates(csvData[0]);
        csvData = removeDuplicateDates(csvData);
        csvData = filterRowsWithNoRecentData(csvData);
    }
    return csvData;
};
