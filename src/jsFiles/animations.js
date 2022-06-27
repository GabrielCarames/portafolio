const animations = {
  animationA: {
    classNames: [
      { className: "presentation", type: " hover" },
      { className: "presentation__image", type: " active" }
    ]
  },
  animationB: {
    classNames: [
      { className: "presentation", type: " hover" },
      { className: "presentation__image", type: " active" },
      { className: "presentation__button", type: " active" },
      { className: "main-about", type: " active" },
      { className: "presentation__button", type: " active" },
      { className: "presentation__button--undo", type: " active" },
      { className: "about-container", type: " active" },
      { className: "presentation", type: " active" },
      { className: "presentation__image", type: " hover" }
    ]
  },
  animationC: {
    classNames: [
      { className: "presentation__button", type: " active" },
      { className: "main-about", type: " active" },
      { className: "presentation__button", type: " active" },
      { className: "presentation__button--undo", type: " active" },
      { className: "about-container", type: " active" },
      { className: "presentation", type: " active" },
      { className: "presentation__image", type: " hover" }
    ]
  },
  animationD: { classNames: [{ className: "main-technologies", type: " active" }] },
  animationE: { classNames: [{ className: "proyects-container__card card", type: " active" }] },
  animationF: { classNames: [{ className: "contact-container__list", type: " active" }] }
}

export default animations
