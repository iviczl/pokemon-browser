export default defineEventHandler(async event => {
  return await import('~/data/pokemon.json');
});