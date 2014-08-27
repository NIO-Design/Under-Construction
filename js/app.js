$(document).ready(function(){
  
  function mainViewModel() {

    var header = "Страницата е в процес на разработка.",
        topic = "До откриването на новата версия остават:",
        days = "Дни",
	hours = "Часове",
        minutes = "Минути",
        seconds = "Секунди"; 

    this.baseLine = ko.observable(header);
    this.secondLine = ko.observable(topic);
	this.days = ko.observable(days);
	this.hours = ko.observable(hours);
	this.minutes = ko.observable(minutes);
	this.seconds = ko.observable(seconds);
  };

  ko.applyBindings(new mainViewModel()); 

});
