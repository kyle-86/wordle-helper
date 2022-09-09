function wordleWord() {

  let boardState = JSON.parse(localStorage.getItem('nyt-wordle-state'))
  let boardSolution = boardState['solution']
  
  //cheap way to remove all entered letters
  for (let i = 0; i < 5; i++ ) {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Backspace',
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    }));
  }

  //type out correct word
  for (let i = 0; i < boardSolution.length; i++) {
      console.log(boardSolution.charAt(i));
      window.dispatchEvent(new KeyboardEvent('keydown', {
        key: boardSolution.charAt(i),
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      }));
  }
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: wordleWord
    });
  }
});