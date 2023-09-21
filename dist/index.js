import { concatenation } from "./concatenation";
const button = document.qwerySelector("button");
const input = document.qwerySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map