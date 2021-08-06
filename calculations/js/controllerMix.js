function mathtutor($scope) {
    $scope.gametitle = "Matematik Öğreniyorum";
    $scope.maxNumber = 11;
    $scope.n1 = 0;
    $scope.n2 = 0;
    $scope.n3 = 0;
    $scope.nn = 0;

    $scope.reloadPage = function () {
        $scope.noOfApples = 3;
        $scope.noOfIceCreams = 0;
        $scope.getNewQuestion();
    }

    $scope.getNewQuestion = function () {
       var random = Math.floor(Math.random()*4);
       switch(random){
           case 0:
           $scope.divide();
           break;
           case 1:
           $scope.multiply();
           break;
           case 2:
           $scope.substract();
           break;
           case 3:
           $scope.add();
           break;
       }
    }

    $scope.divide = function () {
        $scope.n1 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.n2 = Math.floor((Math.random() * 4)+1);
        $scope.n3 = $scope.n1 * $scope.n2;
        $scope.question = $scope.n3 + " / " + $scope.n2;
        $scope.answer = $scope.n3 / $scope.n2;
        $scope.nn = $scope.n3;
        $scope.userAnswer = "";
    }

    $scope.add = function () {
        $scope.n1 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.question = $scope.n1 + " + " + $scope.n2;
        $scope.answer = $scope.n1 + $scope.n2;
        $scope.nn = $scope.n1;
        $scope.userAnswer = "";

    }

    $scope.substract = function () {
        $scope.n1 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.n2 = Math.floor(Math.random() * $scope.n1);
        $scope.question = $scope.n1 + " - " + $scope.n2;
        $scope.answer = $scope.n1 - $scope.n2;
        $scope.nn = $scope.n1;
        $scope.userAnswer = "";
    }

    $scope.multiply = function () {
        $scope.n1 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
        $scope.question = $scope.n1 + " x " + $scope.n2;
        $scope.answer = $scope.n1 * $scope.n2;
        $scope.nn = $scope.n1;
        $scope.userAnswer = "";
    }

    $scope.onVoiceAnswer = function () {
        if ($scope.userAnswer && parseInt($scope.userAnswer) == $scope.answer) {
            $scope.onRightAnswer();
        }
    }
    $scope.onSubmitAnswer = function () {
        if ($scope.userAnswer && parseInt($scope.userAnswer) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
        }
    }

    $scope.onRightAnswer = function () {
        $scope.noOfIceCreams++;
        $scope.getNewQuestion();
    }

    $scope.onWrongAnswer = function () {
        $scope.noOfApples--;
        if ($scope.noOfApples <= 0) {
            $("#lost-modal").modal();
        }
    }
    $scope.skipQuestion = function () {
        $scope.getNewQuestion();
        $scope.noOfIceCreams--;
    }
    $scope.range = function (num) {
        return new Array(num);
    }
}
