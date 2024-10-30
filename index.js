function revealToSpan() {
  document.querySelectorAll("#animate").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function animateHomeParts() {
  gsap.set("nav a", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set(" .home h1 ", {
    y: "100%",
  });
  gsap.set(" .timings h5 ", {
    y: "250%",
  });
  gsap.set(" .row2 img", {
    opacity: 0,
  });
}
animateHomeParts();
revealToSpan();
function animatethings() {
  let tl = gsap.timeline();

  tl.from(" .loader .child span", {
    x: 100,
    duration: 1.5,
    stagger: 0.11,
    ease: Circ.easeInOut,
  })
    .to("  .loader .parent .child", {
      y: "-100%",
      duration: 0.2,
      ease: Circ.easeInOut,
    })
    .to(".loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to(".green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.9,
      ease: Circ.easeInOut,
    })
    .to(".green", {
      height: "0",
      delay: -0.6,
      duration: 1,
      ease: Circ.easeInOut,
      onComplete: function () {
        playAnimatHomeParts();
      },
    })
    .from(".gereen", {
      opacity: 0,
      transform: "scale(500%)",
      duration: 1,
    });
}
animatethings();
animateHomeParts();
function playAnimatHomeParts() {
  let t1 = gsap.timeline();
  t1.to("nav a", {
    y: 0,
    opacity: 1.5,
    duration: 1,
    delay: 0,
    ease: Expo.easeInOut,
  })
    .to(".home h1", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0,
      ease: Expo.easeInOut,
    })
    .to(".timings h5", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: -2,
      ease: Expo.easeInOut,
    })
    .to(".row2 img", {
      opacity: 1,
      duration: 0.5,
      delay: -3,
      ease: Expo.easeInOut,
    });
}

const btn1 = document.querySelector(".edu");
const btn2 = document.querySelector(".ski");
const btn3 = document.querySelector(".ext");
const box1 = document.querySelector(".rlbox1");
const box2 = document.querySelector(".rlbox2");
const box3 = document.querySelector(".rlbox3");

btn1.addEventListener("click", () => {
  // hiding the dv repective to the boxes
  box1.classList.remove("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");
  // button green border
  btn1.classList.add("greenborder");
  btn2.classList.remove("greenborder");
  btn3.classList.remove("greenborder");
});

btn2.addEventListener("click", () => {
  // hiding the dv repective to the boxes
  box1.classList.add("hidden");
  box2.classList.remove("hidden");
  box3.classList.add("hidden");
  // button green border
  btn1.classList.remove("greenborder");
  btn2.classList.add("greenborder");
  btn3.classList.remove("greenborder");
});
btn3.addEventListener("click", () => {
  // hiding the dv repective to the boxes
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.remove("hidden");
  // button green border
  btn1.classList.remove("greenborder");
  btn2.classList.remove("greenborder");
  btn3.classList.add("greenborder");
});
function rotateText() {
  // web text movement
  const boxin = document.querySelector(".home");
  const text = document.querySelector(".gereen");
  boxin.addEventListener("mousemove", (e) => {
    const x =
      (e.clientX -
        text.getBoundingClientRect().x -
        text.getBoundingClientRect().width / 2) /
      70;
    const y =
      -(
        e.clientY -
        text.getBoundingClientRect().y -
        text.getBoundingClientRect().height / 2
      ) / 30;

    text.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
}
rotateText();
//  to check
// function rotatingLogo() {
//   const logobox = document.querySelectorAll(".skill");
//   const logo = document.querySelector("#logo");
//   console.log(logobox);
//   logobox.forEach((e) => {
//     e.addEventListener("mouseover", (e) => {
//       e.style.display = "none";
//     });
//     e.addEventListener("mouseout", () => {
//       logo.style.display = "block";
//     });
//   });
// }
// rotatingLogo();

function eduPart() {
  gsap.from(".slide", {
    transform: "translate(150%)",
    scrollTrigger: {
      trigger: ".education",
      scroller: "body",
      //  markers: true,
      start: "top 70%",
      end: " top 40%",
      //  pin:true,
      scrub: 5,
    },
  });
}
eduPart();

function exp() {
  gsap.to(".exp p", {
    transform: "translate(-100%)",
    scrollTrigger: {
      trigger: ".exp",
      scroller: "body",
      // markers: true,
      start: "top 40%",
      end: " top -100%",
      // pin: true,
      scrub: 10,
    },
  });
}
exp();

const up = document.querySelector(".up")
up.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth",duration:10000})
})
const inputs = document.querySelectorAll(".contact input")
const text = document.querySelectorAll(".contact textarea")
const submit  = document.querySelector(".contact button")
submit.addEventListener("click", function(event) {
  event.preventDefault();
  var templateParams = {
    from_name: document.querySelector(".contact input[name='name']").value.trim(),
    to_name: "Your Name",
    message_html: document.querySelector(".contact textarea").value.trim(),
    reply_to: document.querySelector(".contact input[name='email']").value.trim(),
    phoneNum : document.querySelector(".contact input[name='Phone']").value.trim(),
    budget : document.querySelector(".contact input[name='Budget']").value.trim()
  };

  if(templateParams.from_name && templateParams.message_html && templateParams.reply_to) {
    emailjs.send(
      "service_2mwc1kl",
      "template_2vzct7c",
      templateParams
    ).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        inputs.forEach(input => input.value = '');
        text.forEach(textarea => textarea.value = '');
      },
      function(error) {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  } else {
    alert("Please fill in all fields.");
  }
});