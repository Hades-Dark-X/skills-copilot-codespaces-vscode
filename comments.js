/* Create server for comment
=============================
 */

/* import module */
const express= require("express")
const router= express.Router()
const commentController= require("../controllers/comment")


/* handle request */
router.get("/", commentController.comment.list)
router.get("/create", commentController.comment_ge)
router.post("/create", commentController.comment_p)
router.get("/:id/delete", commentController.comment_delet)