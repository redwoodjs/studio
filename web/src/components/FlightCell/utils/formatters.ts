export const kilobyteFormatter = (number) => {
  return `${(number / 1_024).toFixed(3)} KB`
}
