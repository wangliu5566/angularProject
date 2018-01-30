angular
.module('wrapModule',[])
.controller('navCtrl',function($scope,$state){
	$scope.left = 0;
	$scope.length = 126;

	$scope.nav = [{name:'首页',url:'index'},
	              {name:'关于我们',url:'aboutUs'},
	              {name:'新闻中心',url:'newsCenter'},
	              {name:'产品中心',url:'productCenter'},
	              {name:'交流互动',url:'community'},
	              {name:'联系我们',url:'contactUS'}]

	$scope.flexMove = function (target){
    var isSpeed = 0 ;
        clearInterval($scope.timer)

        $scope.timer = setInterval(function(){
           $scope.left = parseInt($scope.left);
          isSpeed = (target-$scope.left)/5;//设置当前速度
          // isSpeed*=0.9;//当前速度乘以弹性系数
          isSpeed = isSpeed > 0?Math.ceil(isSpeed):Math.floor(isSpeed);

          $scope.left +=isSpeed; //left随速度不断累加
          if(Math.abs(isSpeed)<1&&Math.abs($scope.left-target)<7){
              clearInterval($scope.timer);
              $scope.left = target;
          }
          $scope.left = $scope.left +'px';
          $scope.$apply();
        },30)
   }

   $scope.moveLi=function(index){
   	   $scope.flexMove(index*$scope.length);
   	   $state.go($scope.nav[index].url)
   	   // $state.go('reg')
   }   


})
.directive('lunbo',function(){
  return {
    restrict:'AE',
    replace:true,
    scope:{},
    template:`
      <div class="lunboContent" style="left:{{left+'px'}}">
         <img src="./images/131012868737379092.jpg">
         <img src="./images/131012867375721210.jpg">
         <img src="./images/131012868737379092.jpg">
      </div>
    `,
    link:function(scope){
       scope.left = 0;

       scope.timer = setInterval(function(){
                        var curLeft = 0;
                        if(scope.left <= -2088){
                            scope.left = 0;
                        }
                           scope.setTime = setInterval(function(){
                             if(curLeft >= 1044){
                                clearInterval(scope.setTime)
                             }else{
                               scope.left -= 2;
                               curLeft += 2;
                             }
                              scope.$apply();
                           },2)
              
                      scope.$apply();
                      },5000) 

    }
  }
})


   




