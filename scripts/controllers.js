angular.module("Controllers",[])

.controller("DemoControllers",["$scope",function($scope){
//	console.log("js启动了")
}])

//导航
.controller("Navcontroller",["$scope",function($scope){
	$scope.navs=[
	   {link: '#/', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/settings', text: '设置', icon: 'icon-cog'}
	]
}])
//今日一刻
.controller('TodayController', ['$scope', '$http', '$filter','$rootScope',function ($scope, $http,$filter,$rootScope) {
    $rootScope.title = '今日一刻';
	$rootScope.index = 0;
	$rootScope.loaded = false;
   // 获得计算机时间
	var today = $filter('date')(new Date, 'yyyy-MM-dd');
	$http({
		url: './api/today.php',
		method: 'get',
		params:{today:today}
	}).success(function(info){
		$rootScope.loaded = true;
        $scope.date=info.date;
        $scope.posts=info.posts;

       
	})

}])

// 往期内容
.controller('OlderController', ['$scope', function ($scope) {
//	console.log("我是往期的")
}])

// 热门作者
.controller('AuthorController', ['$scope', function ($scope) {
//	console.log("我是作者的")
	
}])

// 栏目浏览
.controller('CategoryController', ['$scope', function ($scope) {
//	console.log("我是作者的")
	
}])

// 我的喜欢
.controller('FavouriteController', ['$scope', function ($scope) {
//	console.log("我是作者的")
	
}])

.controller('SettingController', ['$scope', function ($scope) {
//	console.log("我是作者的")
	
}])