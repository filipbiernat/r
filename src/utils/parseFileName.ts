export const parseFileName = (fileName: string): string => {
    return fileName.replace(/__/g, ' - ').replace(/_/g, ' ');
};
