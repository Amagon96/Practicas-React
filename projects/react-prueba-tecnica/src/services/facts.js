const CAT_ENDPOINT_RANDOME_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOME_FACT)
  const data = await res.json()
  return data.fact
}
