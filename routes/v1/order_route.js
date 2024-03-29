const express = require("express")
const router = express.Router()
const auth = require("../../middlewares/auth");
const { getOrders, addOrder, getOrderDetails, cancelOrder, changeDate, reviewDP } = require("../../controller/order_ctrl")

router.get("/getAll", auth, getOrders)
router.post("/add", auth, addOrder)
router.get("/getOne/:orderId", auth, getOrderDetails)
router.post("/cancel/:orderId", auth, cancelOrder)
router.post("/change-date/:orderId", auth, changeDate)
router.post("/review-dp/:orderId", auth, reviewDP)

module.exports = router