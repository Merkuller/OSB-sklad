if (document.querySelector('.dragNdrop_reviews')) {
    let dropArea = document.querySelector('.drag-area');
        icon = dropArea.querySelector('.dragIcon');
        dragAreaContent = dropArea.querySelector('.dragAreaContent');
        dropHereText = dropArea.querySelector('.dropHereText');
        file = document.querySelector('.uploadedFiles');
        browseBtn = dropArea.querySelector('.browseFile');
        hiddenField = dropArea.querySelector('input');
    let uploadedFile;

    function changeDropArea(method) {
        dropArea.classList[method]('activeArea');
        dragAreaContent.classList[method]('hidden');
        dropHereText.classList[method]('show');
        if (method === 'add') icon.style.backgroundImage = "url('../img/svg/reviews/dragNdropHover.svg')";
        if (method === 'remove') icon.style.backgroundImage = "url('../img/svg/reviews/dragNdrop.svg')";
    }
                                            
    browseBtn.addEventListener('click', e => {
        e.preventDefault();
        hiddenField.click();
    });

    hiddenField.addEventListener('change', function() {
        uploadedFile = this.files[0];
        makeFiles();
    });

    dropArea.addEventListener('dragover', e => {                                                     
        e.preventDefault();                                                     
        changeDropArea('add');                                                    
    });                                                     

    dropArea.addEventListener('dragleave', () => {
        changeDropArea('remove');
    });

    dropArea.addEventListener('drop', e => {
        e.preventDefault();
        changeDropArea('remove');
        uploadedFile = e.dataTransfer.files[0];
        if (file.children.length < 5) makeFiles();
    });
    
    function makeFiles() {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<div class="uploadedFile"><img src="${fileURL}"><button class="deleteBtn" type="button"></button></div>`;
            file.insertAdjacentHTML('beforeend', imgTag);
            if (file.children.length === 5) browseBtn.classList.add('disabled');
        };
        fileReader.readAsDataURL(uploadedFile);
    }

    file.addEventListener('click', e => {
        e.stopPropagation();
        if (e.target.classList.contains('deleteBtn')) e.target.parentElement.remove();
        if (file.children.length < 5) browseBtn.classList.remove('disabled');
    })
}