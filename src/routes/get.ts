import { APIhandler } from "~/utils/types";

// This is the route "{prefix}/"

export const handler: APIhandler = async (req, res, throwerr) => {
    console.log("hi");

    res.status(200).json({
        message: "API up",
    });
};