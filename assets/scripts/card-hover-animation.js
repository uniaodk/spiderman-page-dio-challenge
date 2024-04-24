function handleMouseEnterCard() {
	document.body.id = `${this.id}--hovered`;
}

function handleMouseLeaveCard() {
	document.body.id = '';
}

function addEventListenerToCards() {
	const cardsElement = document.getElementsByClassName("s-card");
	for (const card of cardsElement) {
		card.addEventListener('mouseenter', handleMouseEnterCard);
		card.addEventListener('mouseleave', handleMouseLeaveCard);
	}
}


document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);