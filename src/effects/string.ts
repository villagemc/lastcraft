// Сокращение строки по длине:
export const useLengthString = (string: string | undefined, length: number = 75) => {
  return string ? (string.length < length ? string : string.slice(0, length) + '...') : undefined
}

// Приемлемый вид для даты:
export const useToggleStringDate = (date: string | undefined) => {
  return date ? date.split('T').join(' ') : undefined;
}