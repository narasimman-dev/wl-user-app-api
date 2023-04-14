const Coupon = require("../models/coupon_model")
const asyncHandler = require("express-async-handler");

const { validateCoupon } = require("../helper/index")

const getCoupon = asyncHandler(async (req, res) =>{
    let { type } = req.params
    let { limit, skip } = req.query;
    try{
        let find = await Coupon.find({type: {$in: type}}).limit(limit).skip(skip)

        res.json({
            message: "Coupon(s) get successfully",
            data: find
        })
    }catch(error){
        throw new Error(error)
    }
})

const applyCoupon = asyncHandler(async (req, res) =>{
    let { code } = req.params
    const { price } = req.body;
    try{
        let valid = await validateCoupon(code, price)
        if (valid?.error) {
            return res.status(400).json(valid);
        }else{
            res.json(valid)
        }
    }catch(error){
        throw new Error(error)
    }
})

module.exports = { getCoupon, applyCoupon }