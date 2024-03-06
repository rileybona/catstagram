
window.onload = async () => {
// Header
  const h1Ele = document.createElement('h1')
  h1Ele.innerText = 'Catstagram'
  document.body.append(h1Ele)

//API Call to Kitten Picture and creating the div element

  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?size=small')
    const data = await res.json();

    console.log(data)
    const link = data[0].url
    console.log(link)

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

// New Cat Image Button
  const newCatButton = document.createElement('button')
  const newCatDiv = document.createElement('div')
  newCatDiv.setAttribute('class', 'cat-button-container')

  newCatButton.innerText = 'New Cat, Please!'
  newCatButton.setAttribute('id', 'cat-button-itself')
  newCatDiv.appendChild(newCatButton)
  document.body.append(newCatDiv)

// div with popularity score
  let score = 0;

  const newScoreDiv = document.createElement('div')
  newScoreDiv.setAttribute('class', 'score-container')

  const scoreP = document.createElement('p')
  scoreP.name = 'scoreP';
  scoreP.innerText = `Popularity Score: ${score}`

  const upVoteButton = document.createElement('button')
  upVoteButton.innerText = 'Upvote'
  upVoteButton.setAttribute('id', 'upVoteButton')
  upVoteButton.target = 'scoreP';
  const downVoteButton = document.createElement('button')
  downVoteButton.innerText = 'Downvote'
  downVoteButton.setAttribute('id', 'downVoteButton')

  newScoreDiv.append(scoreP, upVoteButton, downVoteButton)

// div with comment section
  const bigCommentContainer = document.createElement('div')
    bigCommentContainer.setAttribute('class', 'big-comment-container')
  const innerCommentContainer = document.createElement('div')
    innerCommentContainer.setAttribute('class', 'inner-comment-container')

  //inner div with comment text area and button
  const commentTitle = document.createElement('p')
  commentTitle.innerText = 'Comment: '

  const textInput = document.createElement('input')
  textInput.type = 'text'
  textInput.placeholder = 'Add a comment...'

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerText = 'Submit'

  innerCommentContainer.append(commentTitle, textInput, submitButton)

  //outer div with commenting area and comment viewing
  const commentSection = document.createElement('ul')
  const commentSectionDiv = document.createElement('div')
  commentSectionDiv.setAttribute('class', 'comment-section-div')
  commentSectionDiv.appendChild(commentSection)
  bigCommentContainer.append(innerCommentContainer, commentSectionDiv)

//Greatest Div
  const greatDivContainer = document.createElement('div')
  greatDivContainer.setAttribute('class', 'great-div-container')
  greatDivContainer.append(bigCommentContainer, newScoreDiv)


//appending to page
document.body.append(greatDivContainer)


//  UP VOTE !
const upVoteSelector = document.querySelector("#upVoteButton");
console.log(upVoteSelector);

upVoteSelector.addEventListener('click', (e) => {
  // console.log("hello");
  // console.log("score1: " + score)
  score++;
  // console.log("score2: " + score)
  scoreP.innerText = `Popularity Score: ${score}`
});

// DOWN VOTE !
const downVoteSelector = document.querySelector("#downVoteButton");
downVoteSelector.addEventListener('click', (e) => {
  score--;
  scoreP.innerText = `Popularity Score: ${score}`;
})



}

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM cntent working")
  // attempt at image regeneration
  // const catButtonSelector = document.getElementById("cat-button-itself");
  // const changeCatImg = async () => {
  //   try {
  //     const newRes = await fetch('https://api.thecatapi.com/v1/images/search?size=small');
  //     const newData = await newRes.json();

  //     console.log(newData)
  //     console.log("testing new cat button");
  //     const newLink = newData[0].url;
  //     // console.log(link)
  //     newImage.src = newLink;

  //   } catch (e) {
  //     window.alert("Couldn't fetch cat :(")
  //   }
  // }

  // catButtonSelector.addEventListener('click', changeCatImg);
  // we'll have to add a function to reset comments and votes as well

  //  POPULARITY VOTE FUNCTIONALITY
  // const upVoteSelector = document.getElementById('upVoteButton');



})
