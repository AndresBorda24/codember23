import { readFile } from "fs";
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(new URL('./message_01.txt', import.meta.url))

readFile(fileName, (err, data) => {
    if (err) {
        console.error("Nop: ", err);
        return;
    }

    const d = data
        .toString()
        .split(/[\n\s]/)
        .reduce((obj, w) => {
            if (w !== "") {
                obj[w.toLowerCase()] ??= 0;
                obj[w.toLowerCase()]++;
            }

            return obj;
        }, {});

    console.log(JSON.stringify(d).replace(/[\{\}":,]/g, ""));
});
