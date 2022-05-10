let commentList = [];
const getCommentList= () =>
	[...document.querySelectorAll('#tabcontent > div > ul > li')].forEach((e) => {
		if (e.querySelector('div > button.tooltip')) commentList.push(e.id);
	});
window.confirm = () => {
	console.log('OK');
	return true;
};
getCommentList();
setInterval(() => {
	if (!commentList.length) {
		document.querySelector('#tabcontent > div > div > button').click();
		getCommentList();
	}
	const id = commentList.shift();
	try {
		document.querySelector(`#${id} > div > button.tooltip`).click();
		document.querySelector(`#${id} > div > span.tooltip_box > a.link_delete`).click();
	} catch {}
}, 500);
