
function buildComponent(url, text, index) {

    let component = `
            <div class="img-viewer">
                <div class="img-window">
                    <img src="${url}" style="width: 400px;height: 250px;">
                </div>
                <div class="img-content">
                    <div>
                        <p>${text}</p>
                    </div>
                    <a href="${url}" download="$file{index}" class="img-download-btn"> Download </a>
                </div>
            </div>
    `
    return component;
}


const csvFileInput = document.getElementById('img-input')
const imgViewr = document.getElementById('img-container')

csvFileInput.addEventListener('change', (event) => {

    const file = csvFileInput.files[0];
    
    imgViewr.innerHTML = '';

    const re = /(\.csv)$/i;

    if (re.test(file.name)) {

        let reader = new FileReader();

        reader.onload = function (event) {

            let fileData = reader.result;
            let fileRows = fileData.split('\n')

            fileRows.slice(1).forEach((row, index) => {

                if (row.length) {
                    let columsArr = row.split(',');

                    let url = columsArr[0].trim();
                    let description = columsArr[1].trim();

                    imgViewr.innerHTML += buildComponent(url, description, index);
                }
            });
        }
        reader.readAsText(file);
    }
    else {
        imgViewr.innerText = 'Upload Valid Format'
    }
});

// for downloading images


function downloadFile(url, fileName) {

    const download = document.createElement('a');

    download.href = url;
    download.download = fileName;


    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);

    return;
}