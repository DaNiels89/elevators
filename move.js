$(document).ready(function() {
  class Elevator {
    constructor(selector) {
      this.jq = $(selector);
      this.floor = 8;
    }
  }

  elevator1 = new Elevator('#elevator1');
  elevator2 = new Elevator('#elevator2');
  elevator3 = new Elevator('#elevator3');
  const floors = 8;

  function heightFor(floorNumber) {
    return floors * 100 - parseInt(floorNumber) * 100 + 'px';
  }

  let speed = 500;
  $(document).keydown(function(e) {
    if (parseInt(e.key) > 0 && parseInt(e.key) <= floors) {
      elevator1.jq.css('top', heightFor(e.key));
      elevator2.jq.css('top', heightFor(e.key));
      elevator3.jq.css('top', heightFor(e.key));
    }

    // if (e.key == '1') {
    //   elevator.css('top', '400px');
    // } else if (e.key == '2') {
    //   elevator.css('top', '300px');
    // } else if (e.key == '3') {
    //   elevator.css('top', '200px');
    // } else if (e.key == '4') {
    //   elevator.css('top', '100px');
    // } else if (e.key == '5') {
    //   elevator.css('top', '0px');
    // }
  });

  function moveElevator(elevator, element) {
    let floorHeight = 800 - floorFor(element) * 100;
    elevator.jq.css({ top: floorHeight + 'px' });
    elevator.floor = floorFor(element);
    console.log(elevator);
  }

  function floorFor(element) {
    return parseInt($(element).html());
  }

  $('.click-me1').click(function(e) {
    moveElevator(elevator1, this);
  });

  $('.click-me2').click(function(e) {
    moveElevator(elevator2, this);
  });

  $('.click-me3').click(function(e) {
    moveElevator(elevator3, this);
  });

  const elevators = [elevator1, elevator2, elevator3];

  function randomElevator() {
    return elevators[Math.floor(Math.random() * elevators.length)];
  }

  function closestElevator(element) {
    let targetFloor = floorFor(element);
    let chosenElevator = elevators[0];
    elevators.forEach(function(elevator) {
      let currentDistance = Math.abs(elevator.floor - targetFloor);
      let chosenDistance = Math.abs(chosenElevator.floor - targetFloor);
      if (currentDistance < chosenDistance) {
        chosenElevator = elevator;
      }
    });
    return chosenElevator;
  }

  $('.click-me').click(function(event) {
    moveElevator(closestElevator(this), this);
  });

  // $('.floor').click(function(e) {
  //   let randomNumber = Math.round(Math.random() * 100)
  //   if (lowerOne <= 33) {
  //     $('.click-me1').click(function(e) {
  //       let floorHeight = 800 - parseInt($(this).html()) * 100;
  //       elevator1.css({ top: floorHeight + 'px' });
  //     });
  //   } else if (lowerOne <= 67) {
  //     $('.click-me2').click(function(e) {
  //       let floorHeight = 800 - parseInt($(this).html()) * 100;
  //       elevator2.css({ top: floorHeight + 'px' });
  //     });
  //   } else {
  //     $('.click-me3').click(function(e) {
  //       let floorHeight = 800 - parseInt($(this).html()) * 100;
  //       elevator3.css({ top: floorHeight + 'px' });
  //   }
  // });
  // $('#click-me1').click(function(e) {
  //   elevator.css({ top: '550px' });
  // });
  // $('#click-me2').click(function(e) {
  //   elevator.css({ top: '420px' });
  // });
  // $('#click-me3').click(function(e) {
  //   elevator.css({ top: '290px' });
  // });
  // $('#click-me4').click(function(e) {
  //   elevator.css({ top: '160px' });
  // });
  // $('#click-me5').click(function(e) {
  //   elevator.css({ top: '30px' });
  // });
});
