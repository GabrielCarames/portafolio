const animations = {
  animationA: {
    classNames: [
      { className: "header", type: " hover" },
      { className: "header__image", type: " active" }
    ]
  },
  animationB: {
    classNames: [
      { className: "header", type: " hover" },
      { className: "header__image", type: " active" },
      { className: "button", type: " active" },
      { className: "about-me", type: " active" },
      { className: "button", type: " active" },
      { className: "button undo", type: " active" },
      { className: "paragraph", type: " active" },
      { className: "header", type: " active" },
      { className: "header__image", type: " hover" }
    ]
  },
  animationC: {
    classNames: [
      { className: "button", type: " active" },
      { className: "about-me", type: " active" },
      { className: "button", type: " active" },
      { className: "button undo", type: " active" },
      { className: "paragraph", type: " active" },
      { className: "header", type: " active" },
      { className: "header__image", type: " hover" }
    ]
  },
  animationD: { classNames: [{ className: "main-technologies", type: " active" }] },
  animationE: { classNames: [{ className: "proyects-container__card card", type: " active" }] },
  animationF: { classNames: [{ className: "contact-container__list", type: " active" }] }
}

export default animations
