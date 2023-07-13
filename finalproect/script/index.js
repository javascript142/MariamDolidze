let slideIndex = 0;
autoSlider();
function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("myPictures");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = slideIndex + 1;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlider, 2000) 
}
function handleCheckboxChange() {
    var checkbox = document.getElementById("myCheckbox");
    if (checkbox.checked) {
      console.log("Checkbox is checked");
      // Perform actions when the checkbox is checked
    } else {
      console.log("Checkbox is unchecked");
      // Perform actions when the checkbox is unchecked
    }
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  