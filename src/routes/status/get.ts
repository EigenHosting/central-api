import { APIhandler } from "~/utils/types";
import ErrorBuilder from "~/utils/errors";
import APIerror from "~/utils/APIerror";

const PocketBase = require('pocketbase/cjs');

export const handler: APIhandler = async (req, res, throwerr) => {
    const pb = new PocketBase(process.env.BESZEL_URL);

    // authenticate as regular user
    const userData = await pb.collection('users').authWithPassword(process.env.BESZEL_EMAIL, process.env.BESZEL_PASSWORD);

    // list and filter system records
    const systems = await pb.collection('systems').getList(1, 20, {
        filter: 'status = "up" && created > "2024-06-01 10:00:00"',
    })

    res.status(200).json({
        message: systems,
    });

};