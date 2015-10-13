angular.module("appApp",[])

angular.module("appApp").controller("appController",["$scope","$http",function($scope,$http){

	$scope.applicants = []

	$scope.getApplicants = function ( ) {
		$http({
			method : "GET",
			url    : "/applicants"
		}).then(function(returnData){
			$scope.applicants = returnData.data
		},function(error){
			console.log("error! error!")
		})
	}

	setInterval($scope.getApplicants,1000)

	// $scope.applicant = {
	// 	name   : "",
	// 	bio    : "",
	// 	skills : "",
	// 	years  : "",
	// 	why    : "",
	// }

	// $scope.applicants = []



	// $scope.applicantSubmit = function( ) {
	// 	$http({
	// 		method: "POST",
	// 		url   : "/applicants",
	// 		data  : angular.copy($scope.applicant)
	// 	}).then(function(returnData){
	// 		console.log(returnData)},function(error){
	// 			console.log("Error! Error!")
	// 	})

	// 	$scope.task.name = ""
	// 	$scope.task.bio = ""
	// 	$scope.task.why = ""
	// 	$scope.task.skills = ""
	// 	$scope.task.years = ""
	// }

}])