let selectedCards = [];
  let matches = 0;

function revealCard(index) {
    const card = document.getElementsByClassName('card')[index];
    if (selectedCards.length < 2 && !selectedCards.includes(index)) {
      selectedCards.push(index);
      card.textContent = 'A'; // Replace with your images
      if (selectedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
}

function checkMatch() {
    const cards = document.getElementsByClassName('card');
    if (cards[selectedCards[0]].textContent === cards[selectedCards[1]].textContent) {
      matches++;
      if (matches === 6) {
        alert('Chúc mừng bạn!');
      }
    } else {
      cards[selectedCards[0]].textContent = '?';
      cards[selectedCards[1]].textContent = '?';
    }
    selectedCards = [];
}