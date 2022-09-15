const jokeEle = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    config
  )

  const data = await res.json()

  jokeEle.innerHTML = `${data[0].character}: ${data[0].quote}`
}
