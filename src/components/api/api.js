const domen = 'http://147.78.65.183:8080'

export async function getApi(router) {
  try {
    const response = await fetch(`${domen}/api/get/${router}`);
    return await response.json();
  } catch (e) {
    console.log(`Ошибка запроса на router: ${router}`);
  }
}