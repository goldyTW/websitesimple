"use strict";
(() => {
var exports = {};
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 5793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ inputPurchase)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./models/purchasemodel.js

const purchaseSchema = external_mongoose_default().Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    pesanan: {},
    total: {},
    reason: {
        type: String
    },
    isPaid: {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
/* harmony default export */ const purchasemodel = (external_mongoose_default().model("purchase", purchaseSchema));

;// CONCATENATED MODULE: ./pages/api/purchase.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


external_mongoose_default().connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>app.listen(PORT, ()=>console.log(`Server is Running`))).catch((error)=>console.log(`${error} did not connect`));
async function inputPurchase(req, res) {
    const { email , name , pesanan , total , reason  } = req.body;
    console.log(req.body);
    try {
        const result = await purchasemodel.create({
            email,
            name,
            pesanan,
            total,
            reason,
            isPaid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.status(200).json({
            message: "Success"
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
        console.log(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5793));
module.exports = __webpack_exports__;

})();