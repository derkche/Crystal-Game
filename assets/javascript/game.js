$(document).ready(function() {

    var wins = 0;
    var losses = 0;
   
    //sets the winning number
    var gemsToDeposit = [Math.floor(Math.random()*(120-19+1))+19]
    $("#gems_to_deposit").html(gemsToDeposit);

    var gemsDeposited = 0;
    $("#userGemCount").html(gemsDeposited);

    var greenValue = (Math.floor(Math.random()*(12-1+1))+1)
    var blueValue = (Math.floor(Math.random()*(12-1+1))+1)
    var redValue = (Math.floor(Math.random()*(12-1+1))+1)
    var goldValue = (Math.floor(Math.random()*(12-1+1))+1)
    
    $("#GreenRupee").on("click", function() {
        gemsDeposited += greenValue;
        $("#userGemCount").html(gemsDeposited);
        if (gemsDeposited == gemsToDeposit) {
            alert("You got it!");
            wins ++
            $("#wins").html(wins);
        };
    
        if (gemsDeposited >= gemsToDeposit) {
            alert("Oops you went over");
            losses ++
            $("#losses").html(losses);
        };
    });

    $("#BlueRupee").on("click", function() {
        gemsDeposited += blueValue;
        $("#userGemCount").html(gemsDeposited);
        if (gemsDeposited == gemsToDeposit) {
            alert("You got it!");
            wins ++
            $("#wins").html(wins);
        };
    
        if (gemsDeposited >= gemsToDeposit) {
            alert("Oops you went over");
            losses ++
            $("#losses").html(losses);
        };
    });

    $("#RedRupee").on("click", function() {
        gemsDeposited += redValue;
        $("#userGemCount").html(gemsDeposited);
        if (gemsDeposited == gemsToDeposit) {
            alert("You got it!");
            wins ++
            $("#wins").html(wins);
        };
    
        if (gemsDeposited >= gemsToDeposit) {
            alert("Oops you went over");
            losses ++
            $("#losses").html(losses);
        };
    });

    $("#GoldRupee").on("click", function() {
        gemsDeposited += goldValue
        $("#userGemCount").html(gemsDeposited);
        if (gemsDeposited == gemsToDeposit) {
            alert("You got it!");
            wins ++
            $("#wins").html(wins);
        };
    
        if (gemsDeposited >= gemsToDeposit) {
            alert("Oops you went over");
            losses ++
            $("#losses").html(losses);
        };
    });
    
    if (gemsDeposited == gemsToDeposit) {
        alert("You got it!");
        wins ++
        $("#wins").html(wins);
    };

    if (gemsDeposited >= gemsToDeposit) {
        alert("Oops you went over");
        losses ++
        $("#losses").html(losses);
    };

});