const makeInviteCode = (len)=>{
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < len; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result)
        return result;  
}

const getSelectedValue = (selectId)=>{
    const selectTag = document.getElementById(selectId);
    let selectedValue = selectTag.options[selectTag.selectedIndex].value;
    return selectedValue
}

export {makeInviteCode,getSelectedValue}