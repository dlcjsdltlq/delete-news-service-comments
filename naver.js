let commentLists = [];
window.confirm = () => {
    console.log('OK');
    return true;
}
const getCommentLists = () => commentLists = [...document.querySelectorAll('#cbox_module_wai_u_cbox_content_wrap_tabpanel > ul > li > div > div > div.u_cbox_info > span > span > span > span > a.u_cbox_btn_delete')];
getCommentLists();
setInterval(() => {
    if (!commentLists.length) {
        document.querySelector('body > div.u_cbox.u_cbox_layer_wrap > div > div.u_cbox_layer_user.u_cbox_layer_user_v2 > div > div > div.u_cbox_user_cont > div.u_cbox_paginate > a').click();
        getCommentLists();
    }
    const element = commentLists.shift();
    element.click();
}, 500)