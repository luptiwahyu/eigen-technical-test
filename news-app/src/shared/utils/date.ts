export const formattedDate = (value: string): string => {
  return new Date(value)
    .toLocaleDateString('en-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
}
