let commentList = [];
window.confirm = () => {
    console.log('OK');
    return true;
}
const getCommentList = () => commentList = [...document.querySelectorAll('#cbox_module_wai_u_cbox_content_wrap_tabpanel > ul > li > div > div > div.u_cbox_info > span > span > span > span > a.u_cbox_btn_delete')];
getCommentList();
setInterval(() => {
    if (!commentList.length) {
        document.querySelector('#wa_allcomments > div.u_cbox_paginate.is_more_button > a').click();
        getCommentList();
    }
    const element = commentList.shift();
    element.click();
}, 500)
