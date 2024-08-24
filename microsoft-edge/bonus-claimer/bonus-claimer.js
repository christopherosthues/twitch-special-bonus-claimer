function claimSpecialBonus() {
    const specialBonusButton = document.getElementsByClassName('claimable-bonus__icon')[0];

    if (specialBonusButton) {
        specialBonusButton.click();
        console.log('Special bonus claimed!')
    }
}

setInterval(claimSpecialBonus, 1000);
console.log('Twitch special bonus claimer extension running!')
