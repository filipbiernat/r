const removeTimeFromDates = (row: string[]): string[] => {
    return row.map(dateTime => dateTime.split(' ')[0]);
};

export const processCsvData = (csvData: string[][]): string[][] => {
    if (csvData.length > 0) {
        csvData[0] = removeTimeFromDates(csvData[0]);
    }
    return csvData;
};
