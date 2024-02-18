// Function to shuffle the order of phone numbers
function shufflePhoneNumbers(containerId) {
  var contactNumbersContainer = document.getElementById(containerId);

  var phoneNumbers = Array.from(
    contactNumbersContainer.getElementsByTagName("a")
  ).map(function (link) {
    return link.textContent.trim();
  });

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  var shuffledNumbers = shuffleArray(phoneNumbers);

  // Clear existing phone numbers from the container, excluding the 'p' element
  var childNodes = contactNumbersContainer.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    if (childNodes[i].tagName !== "P" && childNodes[i].tagName !== "SPAN") {
      contactNumbersContainer.removeChild(childNodes[i]);
    }
  }

  // Dynamically add the shuffled phone numbers to the container
  shuffledNumbers.forEach(function (number) {
    var link = document.createElement("a");
    link.href = "https://wa.me/" + number.replace(/\s/g, "");
    link.target = "_blank";
    link.className = "d-block";
    link.innerHTML = '<i class="fa-brands fa-whatsapp mr10"></i>' + number;
    contactNumbersContainer.appendChild(link);
  });
}

// Shuffle phone numbers in the main container
shufflePhoneNumbers("contact-numbers");

// Shuffle phone numbers in the footer container
shufflePhoneNumbers("contact-numbers-footer");
