const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}


function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}


function dragend(e) { 
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault();
    console.log('drag over');
}

function dragenter(e) {
    e.target.classList.add('hovered');
    console.log('drag enter');
}

function dragleave(e) {
    e.target.classList.remove('hovered');
    console.log('drag leave');
}

function dragdrop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
     console.log('drag drop'); 
}