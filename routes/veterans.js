var express = require('express');
var router = express.Router();

var membersController = require('../app/controllers/members');

// Post veteran details
router.post('/member', membersController.postNewMember)
/* GET all veterans. */
router.get('/all-members', membersController.showAllMembers);
// Get single veteran
router.get('/single-member/:id', membersController.showSingleMember);

module.exports = router;
