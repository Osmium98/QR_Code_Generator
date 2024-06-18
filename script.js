function generateQRCode() {
    const url = document.getElementById('url').value;
    const foreground = document.getElementById('foreground').value;
    const background = document.getElementById('background').value;

    const imgBox = document.getElementById('imgBox');
    imgBox.innerHTML = ''; // Clear any existing QR code

    QRCode.toCanvas(
        url,
        { color: { dark: foreground, light: background } },
        function (error, canvas) {
            if (error) {
                console.error(error);
                return;
            }
            imgBox.appendChild(canvas);
        }
    );
}

function downloadQRCode() {
    const canvas = document.querySelector('#imgBox canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();
    }
}

