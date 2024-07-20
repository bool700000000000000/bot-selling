function buyNow() {
    alert("Merci pour votre confiance ! Vous allez être redirigé vers la page de paiement.");
    // Redirection vers une page de paiement ou autre action
    <a href="https://t.me/Sylvain_akp" class="btn btn-primary">Acheter maintenant pour 250$</a>
}
document.addEventListener("DOMContentLoaded", function() {
    fetch("themeYoga.zip")
        .then(response => {
            if (response.ok) return response.blob();
            throw new Error("Network response was not ok.");
        })
        .then(JSZip.loadAsync)
        .then(zip => {
            // Load CSS files
            zip.file(/\.css$/).forEach((relativePath, file) => {
                file.async("string").then(content => {
                    const style = document.createElement("style");
                    style.textContent = content;
                    document.head.appendChild(style);
                });
            });

            // Load JS files
            zip.file(/\.js$/).forEach((relativePath, file) => {
                file.async("string").then(content => {
                    const script = document.createElement("script");
                    script.textContent = content;
                    document.body.appendChild(script);
                });
            });

            // Load images and other assets as needed
            zip.file(/\.jpg$|\.png$|\.svg$/).forEach((relativePath, file) => {
                file.async("base64").then(content => {
                    const img = document.createElement("img");
                    img.src = "data:image/jpeg;base64," + content; // Adjust MIME type accordingly
                    document.body.appendChild(img);
                });
            });
        })
        .catch(error => {
            console.error("Error loading theme:", error);
        });
});
