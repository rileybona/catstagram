
window.onload = async () => {
// Header
  const h1Ele = document.createElement('h1')
  h1Ele.innerText = 'Catstagram'
  document.body.append(h1Ele)

//API Call to Kitten Picture and creating the div element
const storedImage = window.localStorage.getItem('image');
// console.log(storedImage);
let link;

  try {
    if (storedImage) {
      link = storedImage;
    }
    else {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?size=small')
      const data = await res.json();

      // console.log(data)
      link = data[0].url
      // console.log(link)
    }


    const newCat = document.createElement('div')
    const newImage = document.createElement('img')

    newImage.setAttribute('class', 'image-itself')
    newImage.src = link

    //store image
    window.localStorage.setItem('image', link)

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

  newCatButton.innerText = 'New Cat, Please! 🐱'
  newCatButton.setAttribute('id', 'cat-button-itself')
  newCatDiv.appendChild(newCatButton)
  document.body.append(newCatDiv)

// div with popularity score
  let score = 0;
  const savedScore = window.localStorage.getItem('score')
  if (savedScore){
    score = savedScore;
  }

  const newScoreDiv = document.createElement('div')
  newScoreDiv.setAttribute('class', 'score-container')

  const scoreP = document.createElement('p')
  scoreP.name = 'scoreP';
  scoreP.innerText = `Popularity Score: ${score}`

  const upVoteButton = document.createElement('button')
  upVoteButton.innerText = 'Upvote ⬆️'
  upVoteButton.setAttribute('id', 'upVoteButton')


  const downVoteButton = document.createElement('button')
  downVoteButton.innerText = 'Downvote ⬇️'
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
  textInput.setAttribute('id', 'comment-text')

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerText = 'Submit'
  submitButton.setAttribute('id', 'submit-button-itself')

  innerCommentContainer.append(commentTitle, textInput, submitButton)

  //outer div with commenting area and comment viewing
  const commentSection = document.createElement('ul');
  const commentSectionDiv = document.createElement('div');
  const savedComments = window.localStorage.getItem('comments');

  let split1 = savedComments.split('</li>');
  // console.log(split1);
  for (let i = 0; i < split1.length; i++){
    if(split1[i]){
      let split2 = split1[i].split('<li>')
      let comment = split2[1]
      const li = document.createElement('li')
      li.innerText = comment;
      commentSection.appendChild(li)
    }
  }

  commentSectionDiv.append(commentSection)
  commentSection.setAttribute('id', 'ul-comments')

  commentSectionDiv.setAttribute('class', 'comment-section-div')
  commentSection.setAttribute('id', 'ul-comments')
  bigCommentContainer.append(innerCommentContainer, commentSectionDiv)

//Greatest Div
  const greatDivContainer = document.createElement('div')
  greatDivContainer.setAttribute('class', 'great-div-container')
  greatDivContainer.append(bigCommentContainer, newScoreDiv)


//appending to page
  document.body.append(greatDivContainer)

  //  UP VOTE !
  const upVoteSelector = document.querySelector("#upVoteButton");
  // console.log(upVoteSelector);

  upVoteSelector.addEventListener('click', (e) => {
    // console.log("hello");
    // console.log("score1: " + score)
    score++;
    // console.log("score2: " + score)
    scoreP.innerText = `Popularity Score: ${score}`
    window.localStorage.setItem('score', score)
  });

  // DOWN VOTE !
  const downVoteSelector = document.querySelector("#downVoteButton");
  downVoteSelector.addEventListener('click', (e) => {
    score--;
    scoreP.innerText = `Popularity Score: ${score}`;
    window.localStorage.setItem('score', score)
  })

  //Comment Section Functionality
  const commentText = document.querySelector('#comment-text')
  const submit = document.querySelector('#submit-button-itself')

  submit.addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerText = commentText.value;
    commentSection.appendChild(li)
    window.localStorage.setItem('comments', commentSection.innerHTML)
    commentText.value = ''
  })

  // attempt at image regeneration
  const catButtonSelector = document.querySelector("#cat-button-itself");

  //store in local storage
  // storeItems(newImage, score, commentSection)

  async function newCatImage(e){
    e.preventDefault()
    const prevImage = document.querySelector('.image-itself')
    const newCat = document.querySelector('.new-cat-container')
    prevImage.remove(e)

    // console.log(newCat)

    try {
        let data;
          async function fetchData() {
            const res = await fetch('https://api.thecatapi.com/v1/images/search?size=small')
            data = await res.json();
            // console.log(data);
            console.log(data[0].width);
            console.log(data[0].height);
          if (data[0].width > 800 || data[0].height > 800) {
            console.log("its toooo big")
            fetchData();
          } else {
            // console.log("its just right!")
            // console.log("sending back data: " + data);
            // console.log("received data: " + data);
            const link = data[0].url
            // console.log(link);
            window.localStorage.setItem('image', link);
            const newImage = document.createElement('img')

            newImage.setAttribute('class', 'image-itself')
            newImage.src = link
            newCat.appendChild(newImage)
            newCat.setAttribute('class', 'new-cat-container')
          }
          }

          await fetchData();

        } catch (e) {
          window.alert("Couldn't fetch cat :(")
        }
    //reset score and comments
    score = 0;
    scoreP.innerText = `Popularity Score: ${score}`

    while (commentSection.firstChild) {
      commentSection.removeChild(commentSection.lastChild);
    }
    window.localStorage.setItem('comments', commentSection.innerHTML);

    window.localStorage.setItem('score', score = 0);
  }

  catButtonSelector.addEventListener('click', newCatImage);

  //------------------------------------------------------------//

    //place in local storage

    function restoreItems(){
      const image = window.localStorage.getItem('image')
      const score = window.localStorage.getItem('score')
      const comments = window.localStorage.getItem('comments')

      if(image, score, comments){
        document.documentElement.className = ``
      }
    }
}
