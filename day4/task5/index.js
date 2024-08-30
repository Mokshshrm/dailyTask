
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
                    <a href="${url}" onclick="downloadFile(event)" class="img-download-btn" download="file${index}.jpg}"> Download </a>
                </div>
            </div>
    `
    return component;
}


const csvFileInput = document.getElementById('img-input')
const imgViewr = document.getElementById('img-container')

csvFileInput.addEventListener('change', async (event) => {
    event.preventDefault();
    const file = csvFileInput.files[0];

    imgViewr.innerHTML = '';

    const re = /(\.csv)$/i;

    if (re.test(file.name)) {

        let reader = new FileReader();

        reader.onload = async function (event) {

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


async function downloadFile(event) {

    event.preventDefault();
    console.log("in handle function")
    
    const download = document.createElement('a');

    const img = await fetch(event.target.href);
    const blob = URL.createObjectURL(await img.blob())

    download.href = blob;

    download.download = 'file.jpg';
    document.body.appendChild(download);
    download.click();

    URL.revokeObjectURL(blob);
    document.body.removeChild(download);

    return;
}