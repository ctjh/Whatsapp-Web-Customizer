const elementAppearedPbserver = new MutationObserver(() => {
    let wallpaperElem = document.getElementsByClassName('x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d x182nak8 x1wwuglj x1vs56c6')[0];
    let wallpaperImageElem = document.getElementById('wallpaperImageWAWPP');
    let sidebarElem = document.getElementsByClassName('x1n2onr6 _ak9y')[0];
    let sidebarDivs = document.getElementsByClassName('_ak72')
    let sidebarTextPreviews = document.getElementsByClassName('x78zum5 x1cy8zhl')
    if (!wallpaperImageElem && wallpaperElem) {
        wallpaperImageElem = document.createElement('img');
        wallpaperImageElem.id = 'wallpaperImageWAWPP';
        wallpaperElem.appendChild(wallpaperImageElem);
        wallpaperElem.style.opacity = 1;
        wallpaperImageElem.src = '' //upload chat background image link here
        wallpaperImageElem.style.width = '100%';
        wallpaperImageElem.style.height = '100%';

        wallpaperImageElem.style.objectFit = 'cover';
    }
    const imageURL = "" //upload sidebar background image link here

    sidebarElem.style.setProperty('background',
              `url(${imageURL}) center / cover no-repeat`,
              'important')
    for (let div of sidebarDivs) {
        div.style.setProperty('background-color', 'transparent', 'important');
    }
    for (let text of sidebarTextPreviews){
        text.style.setProperty('color', 'black', 'important');
        text.style.setProperty('color', 'white');        }
    
});

elementAppearedPbserver.observe(document.body, {childList: true, subtree: true});

