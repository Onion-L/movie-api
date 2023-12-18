import reviewModel from "./reviewModel";
import asyncHandler from "express-async-handler";
import express from "express";
import { handleApiResponse } from "../../util/apiHandler";

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - author
 *         - content
 *         - id
 *       properties:
 *         author:
 *           type: string
 *           description: Name of the review author
 *         author_details:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Full name of the author
 *             username:
 *               type: string
 *               description: Username of the author
 *             avatar_path:
 *               type: string
 *               description: Path to the author's avatar image
 *             rating:
 *               type: number
 *               description: Rating given by the author
 *         content:
 *           type: string
 *           description: Content of the review
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the review was created
 *         id:
 *           type: string
 *           description: The unique identifier for the review
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the review was last updated
 *         url:
 *           type: string
 *           description: URL of the review
 */

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reivews = await reviewModel.find();
    if (reivews) {
      res.status(200).json(reivews);
    } else {
      res.status(404).json({
        message: "The reivews you requested could not be found.",
        status_code: 404,
      });
    }
  })
);

export default router;
