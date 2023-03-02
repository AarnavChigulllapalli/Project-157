AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "comic-1",
        title: "Comic 1",
        url: "./assets/comic_1.jpg",
      },
      {
        id: "comic-2",
        title: "Comic 2",
        url: "./assets/comic_2.jpg",
      },

      {
        id: "comic-3",
        title: "Comic 3",
        url: "./assets/comic_3.jpg",
      },
      {
        id: "comic-4",
        title: "Comic 4",
        url: "./assets/comic_4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    //Add cursor-listener component to the ring border entity to change it's color 
    //On Cursor 'mouseenter' and 'mouseleave' entity
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
});
