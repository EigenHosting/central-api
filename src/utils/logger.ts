// import chalk from "chalk";

function logWithUser(
    user: string | undefined,
    message: string,
    color: (message: string) => string = (m) => m
): void {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const logMessage = `${color(
        `[ ${formattedDate} ] ` + (user ? ` [ ${user} ] ` : "")
    )}  > ${message}`;

    console.log(logMessage);
}

const logger = {
    info: (...data: string[]) => {
        if (data.length == 1) return logWithUser(undefined, data[0]);
        else return logWithUser(data[0], data[1]);
    },
    success: (...data: string[]) => {
        if (data.length == 1) return logWithUser(undefined, data[0]);
        else return logWithUser(data[0], data[1]);
    },
    warn: (...data: string[]) => {
        if (data.length == 1) return logWithUser(undefined, data[0]);
        else return logWithUser(data[0], data[1]);
    },
    error: (...data: string[]) => {
        if (data.length == 1) return logWithUser(undefined, data[0]);
        else return logWithUser(data[0], data[1]);
    },

    symbols: {
        info: "ⓘ",
        x: "✖",
        warning: "⚠",
        check: "✔",
        retry: "↺",
        chernobyl: "☢",
    },
};

export default logger;