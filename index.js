document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')

  function fetchJoke() {
    const username = document.getElementById('name-input').value
    if (username === "") return;
    fetch('https://icanhazdadjoke.com', {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(jokeData => {
        newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${jokeData.joke}`
        jokeList.appendChild(newJokeLi)
      })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchJoke()
    event.target.reset()
  })
})
