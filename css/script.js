
const inputs = document.querySelectorAll(".remove-placeholder");

for (const input of inputs) {
    const placeholder = input.dataset.placeholder;

    input.addEventListener("focus", function () {
        this.placeholder = "";
    });

    input.addEventListener("blur", function () {
        this.placeholder = placeholder;
    });
}
