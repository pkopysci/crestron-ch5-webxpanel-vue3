
import * as fs from 'fs';
import * as path from 'path';

export const fixHexRgbaColorsInScss = function (compiledPath) {
    const fileNames = fs.readdirSync(compiledPath);
    for (const fileName of fileNames) {
        if (path.extname(fileName) === ".css") {
            const stylesFile = compiledPath + "/" + fileName;
            const start = new Date();
            let replaceCount = 0;
            let fileContents = fs.readFileSync(stylesFile, { encoding: "utf8", flag: "r" });
            fileContents = fileContents.replace(/#[a-f0-9]{8}/gi, function (x) {
                replaceCount++;
                return "rgba(" + parseInt(x.substring(1, 3), 16) + "," + parseInt(x.substring(3, 5), 16) + "," + parseInt(x.substring(5, 7), 16) + "," + Math.round((parseInt(x.substring(7, 9), 16) / 255) * 100) / 100 + ")";
            });

            fileContents = fileContents.replace(/#[a-f0-9]{4}([\!\;\}\,])/gi, function (x, end) {
                replaceCount++;
                return (
                    "rgba(" +
                    parseInt(x.substring(1, 2) + x.substring(1, 2), 16) +
                    "," +
                    parseInt(x.substring(2, 3) + x.substring(2, 3), 16) +
                    "," +
                    parseInt(x.substring(3, 4) + x.substring(3, 4), 16) +
                    "," +
                    Math.round((parseInt(x.substring(4, 5) + x.substring(4, 5), 16) / 255) * 100) / 100 +
                    ")" +
                    end
                );
            });

            fs.writeFileSync(stylesFile, fileContents);

            console.log("Replaced #xxxxxxxx to rgba(x,x,x,x) " + replaceCount + " times in " + (new Date() - start) + "ms in " + stylesFile.split("/").slice(-1));
        }
    }
};