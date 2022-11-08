const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadmultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
//EndPoint category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);
//Akhir EndPoint category

//EndPoint Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", uploadSingle, adminController.deleteBank);
//Akhir EndPoint Bank
router.get("/item", adminController.viewItem);
router.post("/item", uploadmultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadmultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

//Endpoint Detail Item
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);

router.post("/item/add/activity", uploadSingle, adminController.addActivity);
router.put("/item/update/activity", uploadSingle, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);

router.get("/booking", adminController.viewBooking);

module.exports = router;