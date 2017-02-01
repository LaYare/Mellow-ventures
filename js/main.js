$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navegación
        menu: '#menu',
        lockAnchors: false,
        anchors:['home1', 'portafolio1', 'equipo1', 'contacto1'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Nosotros', 'Portafolio', 'Equipo', 'Contacto'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Desplazamiento
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accesibilidad
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Diseno
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['', ''],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Selectores personalizados
        sectionSelector: '.section',
        slideSelector: '.slide',

        //Eventos
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

  function ocultar() {
    if ((document.documentElement.scrollTop || self.pageYOffset) != 0) {
      alert('Vas bien');
    }else {
      alert('Probando, probando');
    }
  }
