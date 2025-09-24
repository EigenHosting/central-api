import { APIhandler } from "~/utils/types";

import {db} from "~/db/db";
import {user} from "~/db/schema";
import {eq} from "drizzle-orm";


// This is the route "{prefix}/"
export const handler: APIhandler = async (req, res, throwerr) => {
    
    res.status(200).json({
        message: "API up",
    });
};