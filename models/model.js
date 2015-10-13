var mongoose = require("mongoose");

var Applicant = mongoose.model('applicant',{
	name   : {type:String},
	bio    : {type:String},
	skills : {type:String},
	years  : {type:Number},
	why    : {type:String},
})

module.exports = {
	Applicant : Applicant
}