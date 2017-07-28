
function ClozeCard(text, cloze) {
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "....");
}

module.exports = ClozeCard;