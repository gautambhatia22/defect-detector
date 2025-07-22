// ✅ This part is ONLY for previewing the image
document.getElementById("imageUpload").addEventListener("change", function () {
    const preview = document.getElementById("imagePreview");
    preview.innerHTML = ""; // Clear previous

    const file = this.files[0];
    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    } else {
        preview.innerHTML = "<p>No image uploaded yet.</p>";
    }
});

// ✅ This part is for analyzing the image when the button is clicked
function detectDefect() {
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];
    const result = document.getElementById("result");

    if (!file) {
        result.innerHTML = "<p>Please upload an image first.</p>";
        return;
    }

    // Mock logic based on file name
    let score = 0;
    const name = file.name.toLowerCase();

    if (name.includes("scratch") || name.includes("crack")) {
        score = 85;
    } else if (name.includes("rust") || name.includes("dull")) {
        score = 60;
    } else if (name.includes("clean") || name.includes("new")) {
        score = 20;
    } else {
        score = 40;
    }

    let level = "LOW";
    if (score > 70) level = "HIGH";
    else if (score > 40) level = "MODERATE";

    // Set the result HTML
    result.innerHTML = `
        <h2>Defect Score: ${score}/100</h2>
        <p>Risk Level: <strong>${level}</strong></p>
    `;

    // Draw fake red defect box
    const preview = document.getElementById("imagePreview");
    const existingBox = document.querySelector(".defect-box");
    if (existingBox) existingBox.remove(); // Remove old box

    const box = document.createElement("div");
    box.className = "defect-box";

    // Random position box for demo
    box.style.top = Math.floor(Math.random() * 150 + 50) + "px";
    box.style.left = Math.floor(Math.random() * 150 + 50) + "px";

    preview.appendChild(box);
}
