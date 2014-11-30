var app = angular.module('vidBrowse', []);

app.controller('TestController',['$scope',function($scope){
  $scope.number = 2;


}]);

app.controller('DisplayController',['$scope',function($scope){
  $scope.activeTab = 1;
  
  $scope.setActive =function(newActiveTab){
    
	$scope.activeTab = newActiveTab;
  }
  
  $scope.isActive = function(tab){
    
	if(tab == $scope.activeTab){
	 $scope.activeTab = tab;
	 return 'active';
	}
	else{
	 return '';
	}
  }
  
  $scope.showCover = function(){
  
     if($scope.activeTab == 1){
	 return true; 
     }
	 else{
	 return false;
	 }
  }
  
   $scope.showVideo = function(){
  
     if($scope.activeTab == 3){
	 return true; 
     }
	 else{
	 return false;
	 }
  }
  
  $scope.showSignUp = function(){
    if($scope.activeTab == 2){
	return true;
	}
	else{
	return false;
	}
  
  }
  
  
}]);

app.directive('innerCover', function(){
 return {
  restrict: 'E',
  templateUrl: '/views/inner-cover.html'
 };

 });
 
app.directive('videoPage', function(){
 return {
  restrict: 'E',
  templateUrl: '/views/video-page.html'
 };

 });
 
 app.directive('signUp', function(){
 return {
  restrict: 'E',
  templateUrl: '/views/sign-up.html'
 };

 });