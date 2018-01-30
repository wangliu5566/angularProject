angular
.module('indexModule',[])
.controller('indexCtrl',function($scope){
	$scope.name='zhangsan'
	$scope.data = [{src:'../images/131033661724620743.jpg',article:'                 红外线椭圆镜面闭合反射点...'},
	               {src:'../images/131033663278139138.jpg',article:'红外线镜面反射快速升温铁...'},
	               {src:'../images/131033664037949442.jpg',article:'真空气相沉积炉'},
	               {src:'../images/131033665384019886.jpg',article:'管式电阻炉'},
	               {src:'../images/131033666117121777.jpg',article:'快速升温电阻炉'},
	               {src:'../images/131033668230350510.jpg',article:'红外线镜面反射快速升温...'},
	               {src:'../images/131033679001451709.png',article:'抛物线红外线镜面反射加热...'},
	               {src:'../images/131091325133448750.jpg',article:'抛物线红外线镜面反射方型...'}
				  ,{src:'../images/131033661724620743.jpg',article:'                红外线椭圆镜面闭合反射点...'},
	               {src:'../images/131033663278139138.jpg',article:'红外线镜面反射快速升温铁...'},
	               {src:'../images/131033664037949442.jpg',article:'真空气相沉积炉'},
	               {src:'../images/131033665384019886.jpg',article:'管式电阻炉'},
	               {src:'../images/131033666117121777.jpg',article:'快速升温电阻炉'},
	               {src:'../images/131033668230350510.jpg',article:'红外线镜面反射快速升温...'},
	               {src:'../images/131033679001451709.png',article:'抛物线红外线镜面反射加热...'},
	               {src:'../images/131091325133448750.jpg',article:'抛物线红外线镜面反射方型...'}
	               
	               ];
    $scope.left = -1480;
    $scope.timer = setInterval(move,40)      
      
    function move(){
    	if($scope.left >= 0){
             $scope.left = -1480
         }
         $scope.left += 2
         $scope.$apply();
    }

    $scope.stop = function(){
    	clearInterval($scope.timer)
    }

    $scope.reStart = function(){
    	$scope.timer = setInterval(move,40)  
    } 

})



