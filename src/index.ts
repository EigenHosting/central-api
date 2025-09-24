import logger from "~/utils/logger";
import app from "~/app";
require('dotenv').config({ path: require('find-config')('.env') })

logger.info("API", "Initiating listening to the port...");
app.listen(process.env.PORT, () => {
    logger.success(
        "API",
        `API nest created and started listening to the specified port in the config`
    );
    logger.info(
        "API",
        `You can access the api on http://localhost:${process.env.PORT}`
    );
    console.log("");
});