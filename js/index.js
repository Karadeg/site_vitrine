const cursor = document.createElement('div');
var switchMenuBoolean = true;

cursor.style.cssText = 'width:100px;height:100px;border-radius:100%;background:white;position:absolute;transform:translate(-50%,-50%);mix-blend-mode: difference;pointer-events: none;';
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.getElementById('click').addEventListener('click', () => {
    startAnimationHomepage();
});
document.getElementById('arrow').addEventListener('click', () => {
    switchMenu();
});
document.addEventListener('mousemove', (event) => {
    // récupère la position du curseur
    const x = event.clientX;
    const y = event.clientY;
  
    // déplace la div pour qu'elle suive le curseur
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
});

function switchMenu(){
    console.log(switchMenuBoolean)
    if (!switchMenuBoolean) {
        document.getElementById('photos_menu').classList.remove('hide_photos_menu');
        document.getElementById('design_menu').classList.remove('show_design_menu');
        document.getElementById('arrow').classList.remove('arrow_design');
        switchMenuBoolean = true;
        console.log(switchMenuBoolean)
    } else {
        document.getElementById('photos_menu').classList.add('hide_photos_menu');
        document.getElementById('design_menu').classList.add('show_design_menu');
        document.getElementById('arrow').classList.add('arrow_design');
        switchMenuBoolean = false;
        console.log(switchMenuBoolean)
    }
}

function startAnimationHomepage () {
    document.getElementById('click_container').classList.add('fadeOut');
    setTimeout(function(){
        document.getElementById('title_homepage').classList.add('moveClipPath');
    }, 800);
    setTimeout(function(){
        document.getElementById('divider').classList.add('moveClipPath');
    }, 1000);
    setTimeout(function(){
        document.getElementById('description').classList.add('moveClipPath');
    }, 1300);
    setTimeout(function(){
        document.getElementById('divider').classList.add('moveClipPath');
    }, 1000);
    setTimeout(function(){
        document.getElementById('title_homepage').classList.remove('moveClipPath');
        document.getElementById('title_homepage').classList.add('movedClipPath');
    }, 2300);
    setTimeout(function(){
        document.getElementById('divider').classList.remove('moveClipPath');
        document.getElementById('divider').classList.add('movedClipPath');
    }, 2500);
    setTimeout(function(){
        document.getElementById('description').classList.remove('moveClipPath');
        document.getElementById('description').classList.add('movedClipPath');
    }, 2800);
    setTimeout(function(){
        document.getElementById('frame_2').classList.add('slideOut');
    }, 4000);
    setTimeout(function(){
        document.getElementById('frame_3').classList.add('slideOut');
    }, 4200);
    setTimeout(function(){
        document.getElementById('frame_4').classList.add('slideOut');
    }, 4400);
    setTimeout(function(){
        document.getElementById('frame_5').classList.add('slideOut');
    }, 4600);
    setTimeout(function(){
        document.getElementById('frame_6').classList.add('slideOut');
    }, 4800);
    setTimeout(function(){
        document.getElementById('frame_7').classList.add('slideIn');
    }, 5000);
    setTimeout(function(){
        document.getElementById('title_menu_photos').classList.add('moveClipPath');
        document.getElementById('arrow').classList.add('moveClipPath');
        Array.from(document.getElementsByClassName('list_element')).forEach(element => {
            element.classList.add('moveClipPath');
        });
    }, 7500);
    
}
  
  
  