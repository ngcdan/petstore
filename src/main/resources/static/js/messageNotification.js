/**
 * Created by Nizis on 3/9/2021.
 */
function clickMessage(messageNotification,themeNotification,titleNotification) {
    window.createNotification({
        closeOnClick: true,
        displayCloseButton: false,
        positionClass: 'nfc-bottom-right',
        showDuration: 3000,
        theme: themeNotification
    })({
        title: titleNotification,
        message: messageNotification
    });
}