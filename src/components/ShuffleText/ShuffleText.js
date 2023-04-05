export default function ShuffleText({ text }) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const hover = (e) => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return e.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= e.target.dataset.value.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 30);
    };

    return (
        <p data-value={text} onMouseOver={hover}>
            {text}
        </p>
    );
}
