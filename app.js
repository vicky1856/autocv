const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
  const name = document.getElementById("name");
 document.getElementById("name-right").innerHTML=name.value;
 document.getElementById("name-right").style.fontWeight="bold";
 document.getElementById("name-right").style.fontSize="20px";
  const phone = document.getElementById("phone");
  const github = document.getElementById("github");
  const linkedin = document.getElementById("linkedin");
  const email=document.getElementById("email");
  document.getElementById("phone-right").innerHTML=phone.value +"|"+github.value +"|"+ linkedin.value +"|"+email.value;

  // document.getElementById("git-right").innerHTML=github.value;
  // document.getElementById("linked-right").innerHTML=linkedin.value;

  const degree = document.getElementById("degree");
  document.getElementById("degree-right").innerHTML=degree.value;
  document.getElementById("degree-right").style.fontSize="15px";
  const college = document.getElementById("college");
  document.getElementById("college-right").innerHTML=college.value;
  document.getElementById("college-right").style.fontSize="25px";
  
  document.getElementById("college-right").style.fontWeight="bold";

  const startingYear = document.getElementById("starting year");
  document.getElementById("sy-right").innerHTML=startingYear.value;
  // document.getElementById("sy-right").
  // document.getElementById("sy-right").
  const passingYear  = document.getElementById("passingyear");
  document.getElementById("py-right").innerHTML=passingYear.right;
  // document.getElementById("py-right").
  // document.getElementById("py-right").
  const cgpa = document.getElementById("cgpa");
  document.getElementById("cgpa-right").innerhtml=cgpa.value;

  const skills = document.getElementById("Skills");
  document.getElementById("skills-right").innerHTML=skills.value;
  document.getElementById("skills-right").style.fontWeight="bold";
  const projects = document.getElementById("projects");
  document.getElementById("projects-right").innerHTML=projects.value;
  document.getElementById("projects-right").style.fontSize="20px";
  document.getElementById("projects-right").style.fontWeight="bold";
  const des=document.getElementById("pdescription");
  document.getElementById("pdescription-right").innerHTML=des.value;
  const lin=document.getElementById("link");
  document.getElementById("link-right").innerHTML=lin.value;

  const company = document.getElementById("company");
  document.getElementById("company-right").innerHTML=company.value;
  document.getElementById("company-right").style.fontWeight="bold"
  document.getElementById("company-right").style.color="darkgrey"
  const designation = document.getElementById("designation");
  document.getElementById("designation-right").innerHTML=designation.value;
  document.getElementById("designation-right").style.fontSize="20px";
  document.getElementById("designation-right").style.fontWeight="bold"
  const duration = document.getElementById("duration");
  document.getElementById("duration-right").innerHTML=duration.value;
  const description = document.getElementById("description");
  document.getElementById("description-right").innerHTML=description.value;
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
  left.style.display="none";
  right.style.display="block";
  print.style.display="block";
 
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
  window.print();
  right.style.display="block";
  
}
