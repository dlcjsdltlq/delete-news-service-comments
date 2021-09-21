let commentLists = [];
const getCommentLists = () =>
	[...document.querySelectorAll('#tabcontent > div > ul > li')].forEach((e) => {
		if (e.querySelector('div > button.tooltip')) commentLists.push(e.id);
	});
window.confirm = () => {
	console.log('OK');
	return true;
};
getCommentLists();
setInterval(() => {
	if (!commentLists.length) {
		document.querySelector('#tabcontent > div > div > button').click();
		getCommentLists();
	}
	const id = commentLists.shift();
	try {
		document.querySelector(`#${id} > div > button.tooltip`).click();
		document.querySelector(`#${id} > div > span.tooltip_box > a.link_delete`).click();
	} catch {}
}, 500);
