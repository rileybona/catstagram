window.onload = async () => {
// Header
const h1Ele = document.createElement('h1')
h1Ele.innerText = 'Kitten Pic'
document.body.append(h1Ele)

//API Call to Kitten Picture and creating the div element

try {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const data = await res.json();

  const link = data[0].url

  const newCat = document.createElement('div')
  const newImage = document.createElement('img')

  newImage.setAttribute('class', 'image-itself')
  newImage.src = link
  newCat.appendChild(newImage)
  newCat.setAttribute('class', 'new-cat-container')

  document.body.append(newCat)

} catch (e) {
  window.alert("Couldn't fetch cat :(")
}


}
