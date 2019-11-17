export const params = {
  particles: {
    number: {
      value: 24,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#a2c8ff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.15232414578222467,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 662.8840189711091,
      color: "#86ff00",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3.1565905665290903,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 5918.607312242045,
        rotateY: 5287.289198936227
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 304.52895461300443,
        size: 4.060386061506726,
        duration: 0.8120772123013451,
        opacity: 0.6415409977180626,
        speed: 3
      },
      repulse: {
        distance: 974.4926547616142,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
